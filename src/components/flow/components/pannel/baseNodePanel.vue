<!-- 图形库 -->
<template>
  <n-popover
    class="base-node-list"
    :show-arrow="false"
    placement="left"
    trigger="manual"
    :x="10"
    :y="25"
    :show="show"
    :on-clickoutside="onClickoutside"
  >
    <div class="base-node-wrapper">
      <div class="base-node-list-header">
        <span>图形库</span>
        <icons size="18" name="X" class="tool-svg" @click="close"> </icons>
      </div>
      <!-- 图形库分类 -->
      <div class="base-node-tabs">
        <div
          class="catalog"
          :class="{ select: item.type == selectGroupKey }"
          v-for="item of graphGroupList"
          :key="item.type"
          @click="clickCatalog(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <!-- 图形库数据 -->
      <div class="base-node-data">
        <div class="shape" v-for="(item, index) of shapeList" :key="index">
          <n-tooltip trigger="hover">
            <template #trigger>
              <div class="icon" @mousedown="handleMouseDown(item, $event)">
                <!-- 基础图形 -->
                <canvas
                  v-if="selectGroupKey == 'baseShape'"
                  :ref="(el) => (baseNodeRefs['basicsShape' + index] = el)"
                  width="32"
                  height="30"
                ></canvas>
                <!-- 其他图形 -->
                <template v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    overflow="visible"
                    width="36"
                    height="36"
                    fill="#333"
                    v-if="item.icon"
                    style="width: 32px; height: 30px"
                  >
                    <g v-html="item.icon"></g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    overflow="visible"
                    width="36"
                    height="36"
                    viewBox="0 0 1024 1024"
                    fill="#333"
                    v-if="!item.icon"
                  >
                    <g v-html="item.content"></g>
                  </svg>
                </template>
              </div>
            </template>
            {{ item.title }}
          </n-tooltip>
        </div>
      </div>
    </div>
  </n-popover>
</template>

<script setup>
import { nodePorts } from '../../config'
import { getThisGraphAndDnd } from '../../utils/graph'
import {
  graphGroupList,
  baseShape,
  ERShape,
  flowShape,
  drawPathShape,
  pathArryToPathStr,
} from '../../utils/shape'
const show = ref(false)
const selectGroupKey = ref('baseShape')
const shapeList = ref([])
const baseNodeRefs = ref([])
const { flowDomId } = defineProps({
  flowDomId: {
    type: String,
    default: '',
  },
})
const { graph: globalGraph , dnd:globalDnd} = getThisGraphAndDnd(flowDomId)

async function initData() {
  const defaultGroupItem = graphGroupList[0]
  selectGroupKey.value = defaultGroupItem.type
  await clickCatalog(defaultGroupItem)
}
// 分类点击
const clickCatalog = async (item) => {
  const { type } = item
  selectGroupKey.value = type
  shapeList.value = await getGroupItemByType(type)
  if (type == 'baseShape') {
    generateCanvas()
  }
}
//根据类型 获取图形库数据
const getGroupItemByType = async (type) => {
  return new Promise((resolve) => {
    let timer = setTimeout(() => {
      switch (type) {
        case 'baseShape':
          resolve(baseShape)
          break
        case 'erShape':
          resolve(ERShape)
          break
        case 'flowShape':
          resolve(flowShape)
          break
        default:
          resolve([])
          break
      }
      clearTimeout(timer)
    }, 200)
  })
}

//渲染基础图形canvas
async function generateCanvas() {
  await nextTick()
  for (let i = 0; i < shapeList.value.length; i++) {
    const canvas = baseNodeRefs.value['basicsShape' + i]
    const ctx = canvas.getContext('2d')
    canvas.width = 32
    canvas.height = 30
    canvas.style.width = 32 + 'px'
    canvas.style.height = 30 + 'px'
    ctx.lineWidth = 1.2
    ctx.strokeStyle = '#333'
    drawPathShape(ctx, {
      ...shapeList.value[i],
      x: 2,
      y: 2,
      height: 26,
      width: 28,
    })
  }
}
const handleMouseDown = (item, e) => {
  console.log('item', item, e)

  let nodeConfig = {}
  // 基础图形
  if (selectGroupKey.value == 'baseShape') {
    nodeConfig = {
      shape: 'path',
      ...nodePorts,
      width: 80,
      height: 80,
      path: pathArryToPathStr(item.path, 80, 80),
      attrs: {
        rect: {
          strokeWidth: 1,
        },
        text: {
          fontSize: 14,
          fill: '#000000',
          refX: 0.5,
          refY: 0.5,
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          text: item.title,
          dx: 5,
        },
      },
      data: {
        disableMove: false,
        shapeClassify: selectGroupKey.value,
      },
    }
  } else {
    // 其他图形
    nodeConfig = {
      shape: 'custom-vue-node', // 使用自定义形状
      ...nodePorts,
      width: 80,
      height: 80,
      data: {
        ...item,
        disableMove: false,
        shapeClassify: selectGroupKey.value,
      },
      attrs: {
        text: {
          text: '',
        },
        rect: {
          fill: '#333',
        },
        label: {
          textAnchor: 'middle',
          fill: 'black',
          fontSize: '16px',
        },
      },
    }
  }
  const node = globalGraph.createNode(nodeConfig)
  node.addTools({
    name: 'node-editor',
  })
  globalDnd.start(node, e)
}

const onClickoutside = () => {
  close()
}

const open = () => {
  show.value = true
  initData()
}
const close = () => {
  show.value = false
}
defineExpose({ open, close })
</script>
<style lang="scss">
.base-node-list {
  position: absolute;
  left: 52px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(5, 0, 56, 0.12);
  border-radius: 14px;
  padding: 20px 16px;
  display: flex;
  flex-wrap: wrap;
  color: #333 !important;
  width: 300px;
  top: 88px;
  user-select: none;
  .n-popover__content {
    width: 100%;
  }
  .base-node-list-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    span {
      display: block;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .base-node-tabs {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;

    .catalog {
      background: #e675a6;
      padding: 2px 20px;
      margin-bottom: 10px;
      margin-right: 4px;
      font-size: 14px;
      border-radius: 12px;
      cursor: pointer;
      color: #333;
      background: #f3f3f3;
    }

    .select {
      color: #fff;
      background: #e675a6;
    }
  }
  .base-node-data {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 10px 0;
    max-height: 280px;
    overflow: scroll;
    .shape {
      width: 20%;
      width: 20%;
      margin-bottom: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-shrink: 0;
      transition: all 0.5s;
      box-sizing: border-box;
      color: #fff;

      .icon {
        width: 45px;
        height: 45px;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        position: relative;
        cursor: pointer;
        background: #f3f3f3;
        border-radius: 6px;

        &:hover {
          border: 1px solid #ddd;
        }

        svg {
          font-size: 25px;
        }
      }
    }
  }
}
</style>
