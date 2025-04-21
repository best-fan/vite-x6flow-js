<!-- 线段配置 -->
<template>
  <div v-if="isVisible" :style="domPosition" class="node-edit-tools">
    <template v-if="!isLock">
      <template v-if="!['brushPathShape', 'imageShape'].includes(shapeClassify)">
        <!-- 字体大小 -->
        <n-input-number
          class="input-number"
          :show-button="false"
          v-model:value="nodeStyle.fontSize"
          @update:value="(value) => changAttrs(value, 'fontSize')"
        />
        <!-- 字体颜色 -->
        <div class="selected-color-bg">
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-color-picker
                class="color-picker"
                :actions="['confirm']"
                v-model:value="nodeStyle.fontColor"
                :swatches="quickColors"
                @update:value="(value) => changAttrs(value, 'fontColor')"
              >
              </n-color-picker>
            </template>
            字体颜色
          </n-tooltip>
        </div>
        <!-- 居中 -->
        <n-dropdown
          class="text-dropdown"
          trigger="hover"
          :options="svgTextAlignList"
          @select="(value) => changAttrs(value, 'textAlign')"
        >
          <icons size="16" name="AlignCenter" class="tool-svg" />
        </n-dropdown>
        <!-- 边框颜色 -->
        <div
          class="selected-color-bg border-color-picker"
          v-if="['baseShape'].includes(shapeClassify)"
        >
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-color-picker
                class="color-picker"
                :style="{ borderColor: nodeStyle.borderColor }"
                :actions="['confirm']"
                v-model:value="nodeStyle.borderColor"
                :swatches="quickColors"
                @update:value="(value) => changAttrs(value, 'borderColor')"
              />
            </template>
            边框颜色
          </n-tooltip>
        </div>
      </template>

      <!-- 背景颜色 -->
      <div class="selected-color-bg" v-if="!['imageShape'].includes(shapeClassify)">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-color-picker
              class="color-picker"
              :actions="['confirm']"
              v-model:value="nodeStyle.backgroundColor"
              :swatches="quickColors"
              @update:value="(value) => changAttrs(value, 'backgroundColor')"
            />
          </template>
          {{ shapeClassify == 'baseShape' ? '背景颜色' : '边框颜色' }}
        </n-tooltip>
      </div>
    </template>
    <div class="tool-svg" v-if="!isLock">
      <n-tooltip trigger="hover">
        <template #trigger>
          <icons size="16" name="Copy" class="tool-svg" @click="copyNode" />
        </template>
        复制
      </n-tooltip>
    </div>
    <div class="tool-svg" v-if="!isLock">
      <n-tooltip trigger="hover">
        <template #trigger>
          <icons size="16" name="Trash2" class="tool-svg" @click="deleteNode" />
        </template>
        删除
      </n-tooltip>
    </div>
    <div class="tool-svg" title="锁定">
      <n-tooltip trigger="hover">
        <template #trigger>
          <icons
            size="16"
            :name="isLock ? 'LockOpen' : 'Lock'"
            class="tool-svg"
            @click="lockNode"
          />
        </template>
        锁定
      </n-tooltip>
    </div>
    <!-- 更多 -->
    <div class="tool-svg">
      <n-dropdown
        :options="moreDropdownOptionList"
        placement="bottom-start"
        trigger="hover"
        @select="moreSelcet"
      >
        <icons size="16" name="Ellipsis" class="tool-svg" />
      </n-dropdown>
    </div>
  </div>
</template>

<script setup>
import {
  changeNodeTransformStatus,
  changeNodeSelectStatus,
  getThisGraphAndDnd,
} from '../../utils/graph'
import { quickColors, svgTextAlignList, nodeStyleDefault, moreDropdownOptions } from './config'
import { copyCells, pasteCells, delNode } from '../../utils/index'

let selectedNode = null
const isVisible = ref(false)
let domPosition = reactive({
  left: '',
  top: '',
})
const isLock = ref(false)
let nodeStyle = ref({
  ...nodeStyleDefault,
})
let shapeClassify = ref('')

const moreDropdownOptionList = computed(() => {
  if (isLock.value) {
    return moreDropdownOptions.filter((item) => item.key != 'copyNode')
  }
  return moreDropdownOptions
})
const { flowDomId } = defineProps({
  flowDomId: {
    type: String,
    default: '',
  },
})
const { graph: globalGraph } = getThisGraphAndDnd(flowDomId)

const changAttrs = (value, type) => {
  switch (type) {
    case 'fontSize':
      if (value > 12 && value < 60) {
        selectedNode.attr('label/fontSize', `${value}px`)
      }
      break
    case 'fontColor':
      selectedNode.attr('label/fill', value)
      break
    case 'backgroundColor':
      // <!--shapeClassify： erShape  flowShape  baseShape -->
      switch (shapeClassify.value) {
        case 'baseShape':
          selectedNode.attr('path/fill', value)
          break
        case 'brushPathShape':
          selectedNode.attr('path/stroke', value)
          break

        default:
          selectedNode.attr('rect/fill', value)
          break
      }
      break
    case 'textAlign':
      selectedNode.attr('label/textAnchor', value)
      break
    case 'borderColor':
      selectedNode.attr('body/stroke', value)
      break
    default:
      break
  }
}
const copyNode = () => {
  copyCells(globalGraph)
  pasteCells(globalGraph)
}

const deleteNode = () => {
  delNode(globalGraph)
  hidden()
}
const lockNode = () => {
  isLock.value = !isLock.value

  selectedNode.setData({
    ...selectedNode.getData(),
    disableMove: isLock.value,
  })
  changeNodeTransformStatus(isLock.value, selectedNode, globalGraph)
  changeNodeSelectStatus(!isLock.value, selectedNode, globalGraph)
}

const moreSelcet = (key) => {
  const zIndex = selectedNode.getZIndex()
  switch (key) {
    case 'top':
      selectedNode.toFront()
      break
    case 'up':
      selectedNode.setZIndex(zIndex + 1)
      break
    case 'bottom':
      selectedNode.toBack()
      break
    case 'down':
      selectedNode.setZIndex(zIndex - 1)
      break
    case 'copyNode':
      copyCells(globalGraph)
      break
    default:
      break
  }
}
function setDomPosition(node) {
  const flowContainer = document.getElementById(flowDomId)
  const { width: viewWidth, height: viewHeight } = flowContainer.getBoundingClientRect()
  const graph = {
    width: viewWidth,
    height: viewHeight,
  }
  const menuNums = isLock.value ? 2 : shapeClassify.value === 'brushPathShape' ? 5 : 9
  const toolSize = {
    width: 40 * menuNums + 20,
    height: 40,
    offY: 30,
    offX: 10,
  }

  const { x, y } = node.position()

  const { width, height } = node.size()

  let basePosition = {
    left: x + (width - toolSize.width) / 2,
    top: y - toolSize.height - toolSize.offY,
  }

  if (basePosition.top < 0) {
    basePosition.top = y + height + toolSize.offY
  }

  if (basePosition.left + toolSize.width > graph.width) {
    basePosition.left = graph.width - toolSize.width - toolSize.offX
  }
  if (basePosition.left < 0) {
    basePosition.left = toolSize.offX
  }
  domPosition.left = `${basePosition.left}px`
  domPosition.top = `${basePosition.top}px`
}
function show(node) {
  selectedNode = node
  setDomPosition(node)

  const attrs = node.attr()
  let backgroundColor = 'transparent'
  let borderColor = '#000000'
  shapeClassify.value = node.getData()?.shapeClassify || 'nomerShape'
  switch (shapeClassify.value) {
    // 默认节点
    case 'nomerShape':
      backgroundColor = attrs.rect?.fill
      break
    // 画笔节点
    case 'brushPathShape':
      backgroundColor = attrs.path.stroke || backgroundColor
      break
    // 基础图形节点
    case 'baseShape':
      backgroundColor = attrs.path?.fill || backgroundColor
      borderColor = attrs.body?.stroke || borderColor
      break
    default:
      backgroundColor = attrs.rect?.fill
      break
  }

  // 画笔节点
  const fontSize = attrs.label?.fontSize || null
  nodeStyle.value = {
    fontSize: typeof fontSize == 'string' ? Number(fontSize?.replace('px', '')) : fontSize || 16,
    fontColor: attrs.label?.fill || '#000',
    backgroundColor: backgroundColor,
    textAlign: attrs.label?.textAnchor || 'middle',
    borderColor: borderColor,
  }
  isLock.value = node.getData()?.disableMove
  isVisible.value = true
}

function hidden() {
  isVisible.value = false
}
defineExpose({ show, hidden })
</script>
<style lang="scss">
.node-edit-tools {
  position: absolute;
  z-index: 1001;
  cursor: default;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 30px #e3e3e3;
  padding: 0 10px 0 10px;
  display: flex;
  //width: 290px;
  min-height: 40px;
  align-items: center;

  .input-number {
    width: 40px;
    height: 30px;
    padding: 4px;
    text-align: center;
    border-radius: 0;
    .n-input-wrapper {
      padding: 0;
    }
    .n-input {
      width: 40px;
      height: 30px;
      position: relative;
      top: -3px;
    }
    .n-input__input-el {
      height: 30px;
    }
  }
  .text-dropdown {
    width: 40px;
    cursor: pointer;
  }
  .border-color-picker {
    .color-picker {
      border: 1px solid black;
      .n-color-picker-trigger__fill {
        display: none;
      }
      .n-color-picker-checkboard + div {
        background-color: #fff;
        display: none;
      }
    }
  }
  .selected-color-bg {
    width: 40px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .color-picker {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      overflow: hidden;

      .n-color-picker-trigger {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: none;
      }
      .n-color-picker-trigger__fill {
        padding: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
      .n-color-picker-trigger__value {
        display: none;
      }
    }
  }
  .tool-svg {
    position: relative;
    top: 2px;
    width: 40px;
    text-align: center;
    svg {
      cursor: pointer;
    }
  }
}
</style>
