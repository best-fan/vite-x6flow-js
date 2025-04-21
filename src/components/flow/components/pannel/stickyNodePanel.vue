<!-- 便利贴 -->
<template>
  <n-popover
    class="sticky-node-list"
    :show-arrow="false"
    placement="left"
    trigger="manual"
    :x="10"
    :y="5"
    :show="show"
    :on-clickoutside="onClickoutside"
  >
    <!-- 自定义下拉菜单内容 -->
    <span
      class="sticky-node-item"
      v-for="(item, index) in stickyNodeList"
      :key="index"
      :style="{ background: item.backgroundColor }"
      @mousedown="handleMouseDown(item, $event)"
    ></span>
  </n-popover>
</template>

<script setup>
import { getThisGraphAndDnd } from '../../utils/graph'
import { stickyNodeList, nodePorts } from '../../config'
const show = ref(false)

const { flowDomId } = defineProps({
  flowDomId: {
    type: String,
    default: '',
  },
})
const { graph: globalGraph,dnd:globalDnd } = getThisGraphAndDnd(flowDomId)

const handleMouseDown = (item, e) => {
  console.log('handleMouseDown', item, e)
  const node = globalGraph.createNode({
    shape: 'rect',
    ...item,
    ...nodePorts,
    attrs: {
      rect: {
        strokeWidth: 0,
        fill: item.backgroundColor,
      },
      text: {
        fontSize: 14,
        fill: '#000000',
        refX: 0.5,
        refY: 0.5,
        textAnchor: 'middle',
        textVerticalAnchor: 'middle',
        text: '便利贴',
        dx: 5,
      },
    },
    data: {
      disableMove: false, //false 为可拖拽，true不可拖拽
      shapeClassify:'stickyShape'
    },
  })
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
}
const close = () => {
  show.value = false
}
defineExpose({ open, close })
</script>
<style lang="scss">
.sticky-node-list {
  position: absolute;
  left: 52px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(5, 0, 56, 0.12);
  border-radius: 14px;
  padding: 20px 16px;
  display: flex;
  flex-wrap: wrap;
  color: #333 !important;
  width: 240px;
  top: 88px;
  .sticky-node-item {
    display: inline-block;
    width: 40px;
    height: 50px;
    box-shadow: rgb(170, 170, 170) 0px 12px 7px -10px;
    margin: 5px 6px;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>
