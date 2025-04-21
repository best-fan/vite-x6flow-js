<template>
  <n-popover
    class="line-setting-panel"
    :show-arrow="false"
    placement="left"
    trigger="manual"
    :x="10"
    :y="85"
    :show="show"
    :on-clickoutside="onClickoutside"
  >
    <n-tooltip v-for="(line, index) in lineTypes" :key="index" trigger="hover">
      <template #trigger>
        <svg
          class="line-item"
          :t="line.t"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4583"
          width="20"
          height="20"
          @click="toSetLineType(line.type)"
        >
          <path :d="line.path" fill="#2c2c2c" p-id="4584"></path>
        </svg>
      </template>
      {{ line.label }}
    </n-tooltip>
  </n-popover>
</template>

<script setup>
import { svgIcon } from '../../utils/shape'
import { globalGraph, globalDnd, setConnectEdgeConfig } from '../../utils/graph'
const lineTypes = [...Object.values(svgIcon)].slice(0, 6)
const show = ref(false)

const onClickoutside = () => {
  close()
}

const open = () => {
  show.value = true
  globalGraph.on('edge:created', ({ edge }) => {
    console.log('edge:created', edge)

    edge.setConnector({
      name: 'normal', // 设置平滑曲线连线器
      args: {
        radius: 10, // 可选参数
      },
    })
  })
}

const close = () => {
  show.value = false
}

const toSetLineType = (type) => {
  let defaultMarkerConfig = {
    sourceMarker: null,
    targetMarker: {
      name: 'classic',
      size: 8,
    },
  }
  switch (type) {
    case 'line':
    case 'brokenLine':
    case 'curve':
      defaultMarkerConfig.targetMarker = null
      break
    case 'lineAndArrow':
    case 'brokenLineAndArrow':
    case 'curveAndArrow':
      break
  }
  setConnectEdgeConfig(type, defaultMarkerConfig)
  close()
}
defineExpose({ open, close })
</script>

<style lang="scss">
.line-setting-panel {
  position: absolute;
  left: 52px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(5, 0, 56, 0.12);
  border-radius: 14px;
  padding: 20px 16px;
  display: flex;
  flex-wrap: wrap;
  color: #333 !important;
  width: 90px;
  top: 88px;
  .line-item {
    display: inline-block;
    width: 25px;
    height: 30px;
    margin: 8px 2px;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>
