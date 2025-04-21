<!-- 节点配置 -->
<template>
  <div v-if="isVisible" :style="domPosition" class="edge-edit-tools">
    <!-- 设置文字 -->
    <n-popover placement="bottom" trigger="click" raw :show-arrow="false">
      <template #trigger>
        <n-tooltip trigger="hover">
          <template #trigger>
            <icons size="16" name="Type" class="tool-svg" />
          </template>
          文字设置
        </n-tooltip>
      </template>
      <div class="line-setting">
        <n-input
          v-model:value="edgeStyle.text"
          size="tiny"
          type="text"
          placeholder="请输入文本"
          @input="(value) => changAttrs(value, 'label')"
        />
      </div>
    </n-popover>

    <!-- 线 -->
    <n-popover placement="bottom" trigger="click" raw :show-arrow="false">
      <template #trigger>
        <n-tooltip trigger="hover">
          <template #trigger>
            <icons size="16" name="Slash" class="tool-svg" />
          </template>
          连线设置
        </n-tooltip>
      </template>
      <div class="line-setting">
        <div class="line-icon-list">
          <n-tooltip v-for="(line, index) in lineSvgList" :key="index" trigger="hover">
            <template #trigger>
              <span class="svg-item" @click="changeEdge('line', line.type)">
                <svg
                  class="line-item"
                  :t="line.t"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4583"
                  width="25"
                  height="25"
                >
                  <path :d="line.path" fill="#2c2c2c" p-id="4584"></path>
                </svg>
              </span>
            </template>
            <span>{{ line.label }}</span>
          </n-tooltip>
        </div>
        <n-slider
          v-model:value="edgeStyle.strokeWidth"
          :step="1"
          :min="0"
          :max="10"
          @update:value="changeStrokeWidth"
        />
        <div class="stroke-setting">
          <span>线条宽度 </span>
          <span class="stroge-number">{{ edgeStyle.strokeWidth }}</span>
        </div>
      </div>
    </n-popover>

    <!-- 左箭头 -->
    <n-popover placement="bottom" trigger="click" raw :show-arrow="false">
      <template #trigger>
        <n-tooltip trigger="hover">
          <template #trigger>
            <icons size="16" name="ArrowLeft" class="tool-svg" />
          </template>
          左箭头
        </n-tooltip>
      </template>
      <div class="line-setting">
        <div class="line-icon-list">
          <n-tooltip v-for="(line, index) in arrowSvgList" :key="index" trigger="hover">
            <template #trigger>
              <span class="svg-item" @click="changeEdge('left-arrow', line.type)">
                <svg
                  class="line-item"
                  :t="line.t"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4583"
                  width="30"
                  height="30"
                >
                  <path :d="line.path" fill="#2c2c2c" p-id="4584"></path>
                </svg>
              </span>
            </template>
            <span>{{ line.label }}</span>
          </n-tooltip>
        </div>
      </div>
    </n-popover>

    <!-- 右箭头 -->
    <n-popover placement="bottom" trigger="click" raw :show-arrow="false">
      <template #trigger>
        <n-tooltip trigger="hover">
          <template #trigger>
            <icons size="16" name="ArrowRight" class="tool-svg" />
          </template>
          右箭头
        </n-tooltip>
      </template>
      <div class="line-setting">
        <div class="line-icon-list">
          <n-tooltip v-for="(line, index) in arrowSvgList" :key="index" trigger="hover">
            <template #trigger>
              <span class="svg-item" @click="changeEdge('right-arrow', line.type)">
                <svg
                  class="line-item"
                  :t="line.t"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4583"
                  width="30"
                  height="30"
                  style="transform: rotate(180deg)"
                >
                  <path :d="line.path" fill="#2c2c2c" p-id="4584"></path>
                </svg>
              </span>
            </template>
            <span>{{ line.label }}</span>
          </n-tooltip>
        </div>
      </div>
    </n-popover>

    <!-- 线条颜色 -->
    <div class="selected-color-bg">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-color-picker
            class="color-picker"
            :actions="['confirm']"
            v-model:value="edgeStyle.stroke"
            :swatches="quickColors"
            @update:value="(value) => changAttrs(value, 'strokeColor')"
          />
        </template>
        线条颜色
      </n-tooltip>
    </div>

    <!-- 删除 -->
    <div class="tool-svg">
      <n-tooltip trigger="hover">
        <template #trigger>
          <icons size="16" name="Trash2" class="tool-svg" @click="deleteEdge" />
        </template>
        删除
      </n-tooltip>
    </div>
  </div>
</template>

<script setup>
import { globalGraph } from '../../utils/graph'
import { lineSvgList, arrowSvgList } from '../../utils/shape'
import { delEdge } from '../../utils/index'
import { quickColors, edgeStyleDefault } from './config'

let selectedEdge = null
const isVisible = ref(false)
let domPosition = reactive({
  ...edgeStyleDefault,
})
const isLock = ref(false)
const edgeStyle = ref({})

// 切换线样式 、 箭头样式
const changeEdge = (type, value) => {
  if (type === 'line') {
    // line  brokenLine curveAndArrow  horizontalLine  dashed1  dashed2
    if (value === 'line') {
      selectedEdge.setRouter('').setConnector('normal')
    }
    if (value === 'brokenLine') {
      selectedEdge.setRouter('manhattan').setConnector('normal')
    }
    if (value === 'curveAndArrow') {
      selectedEdge.setRouter('').setConnector('smooth')
    }
    if (value === 'horizontalLine') {
      selectedEdge.attr('line/stroke-dasharray', '0')
    }
    if (value === 'dashed1') {
      selectedEdge.attr('line/stroke-dasharray', '5,5')
    }
    if (value === 'dashed2') {
      selectedEdge.attr('line/stroke-dasharray', '5,10,5')
    }
    return
  }
  if (type.includes('arrow')) {
    const marker = type === 'left-arrow' ? 'sourceMarker' : 'targetMarker'
    if (value == 'circle' || value == 'ellipse') {
      selectedEdge.attr(`line/${marker}`, {
        name: value,
        fill: value == 'circle' ? '#fff' : 'black',
        stroke: 'black',
      })
      return
    }
    selectedEdge.attr(`line/${marker}`, value)
  }
}
// 改变线条宽度
const changeStrokeWidth = () => {
  selectedEdge.attr('line/strokeWidth', edgeStyle.value.strokeWidth)
}
const changAttrs = (value, type) => {
  switch (type) {
    case 'strokeColor':
      selectedEdge.attr('line/stroke', value)
      break
    case 'label':
      selectedEdge.setLabels([{ attrs: { label: { text: value } } }])
    default:
      break
  }
}

const deleteEdge = () => {
  delEdge(globalGraph)
  hidden()
}
function setDomPosition(edge, { x, y }) {
  const flowContainer = document.getElementById('flow-container')
  const { width: viewWidth, height: viewHeight } = flowContainer.getBoundingClientRect()
  const graph = {
    width: viewWidth,
    height: viewHeight,
  }
  const toolSize = {
    width: 40 * 6 + 20,
    height: 40,
    offY: 20,
    offX: 10,
  }
  let basePosition = {
    left: x - toolSize.width / 2,
    top: y - toolSize.height - toolSize.offY,
  }
  if (basePosition.top < 0) {
    basePosition.top = y + toolSize.offY
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

function show(edge, event) {
  selectedEdge = edge
  setDomPosition(edge, event)

  const attrs = edge.attr()
  const label = edge.getLabels()
  let text = ''
  if (label.length) {
    text = label[0].attrs.label.text
  }
  edgeStyle.value = {
    strokeWidth: attrs?.line?.strokeWidth || 1,
    stroke: attrs?.line?.stroke || '#000000',
    text,
  }
  isVisible.value = true
}

function hidden() {
  isVisible.value = false
}
defineExpose({ show, hidden })
</script>
<style lang="scss">
.edge-edit-tools {
  position: absolute;
  z-index: 1001;
  cursor: default;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 30px #e3e3e3;
  padding: 0 10px 0 10px;
  display: flex;
  // width: 230px;
  min-height: 40px;
  align-items: center;

  .selected-color {
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .color-picker {
      position: relative;
      width: 20px;
      height: 5px;
      top: 2px;

      .n-color-picker-trigger {
        width: 20px;
        height: 5px;
        border: none;
      }
      .n-color-picker-trigger__fill {
        padding: 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 20px;
        height: 5px;
      }
      .n-color-picker-trigger__value {
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
    width: 40px;
    height: 16px;
    text-align: center;
    cursor: pointer;
    &:hover {
      option: 0.8;
    }
  }
}
.line-setting {
  // position: relative;
  background: #fff;
  width: 180px;
  padding: 16px;
  z-index: 81;
  // top: 10px;
  box-shadow: 0 8px 32px rgba(5, 0, 56, 0.08);
  // left: 30px;
  border-radius: 5%;
  .line-icon-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .svg-item {
      padding: 5px 8px;
      cursor: pointer;
    }
  }
  .stroke-setting {
    margin-top: 8px;
    .stroge-number {
      float: right;
      padding: 0 5px;
    }
  }
}
</style>
