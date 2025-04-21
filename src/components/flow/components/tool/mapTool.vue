<template>
  <div class="map-tool">
    <TipTool icon="Download" tooltip="导出图片" @click="download"></TipTool>
    <TipTool icon="Minus" tooltip="缩小" @click="action('scaleDown')" />
    <span class="scale-text">{{ zoomNum }}%</span>
    <TipTool icon="Plus" tooltip="放大" @click="action('scaleUp')" />
    <TipTool icon="Shrink" tooltip="恢复" @click="action('reset')" />
    <TipTool
      icon="ChevronUp"
      tooltip="展开/收起缩略图"
      :style="isShowMinmap ? 'transform:rotate(180deg)' : ''"
      @click="setMinmapStatus"
    />
    <div class="minimap_main" :id="'minimap' + flowDomId"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getThisGraphAndDnd } from '../../utils/graph.js'
const isShowMinmap = ref(true)
import TipTool from './tipTool.vue'
const zoomNum = ref(100)
const { flowDomId } = defineProps({
  flowDomId: {
    type: String,
    default: '',
  },
})
onMounted(() => {
  setMinmapStatus()
})

const action = (type) => {
  const { graph: globalGraph } = getThisGraphAndDnd(flowDomId)
  if (type === 'scaleUp') {
    globalGraph.zoom(0.1)
  } else if (type === 'scaleDown') {
    globalGraph.zoom(-0.1)
  } else if (type === 'reset') {
    globalGraph.zoomTo(1)
  }

  zoomNum.value = (globalGraph.zoom().toFixed(1) * 100).toFixed(0)
}

const download = () => {
  const { graph: globalGraph } = getThisGraphAndDnd(flowDomId)
  globalGraph.exportPNG(`${new Date().getTime()}.png`, {
    padding: 80, // 添加边距，防止图形被裁剪
    scale: 2, // 设置导出的缩放比例，确保图形更清晰
    width: globalGraph.view.options.width, // 导出时的宽度
    height: globalGraph.view.options.height, // 导出时的高度
    quality: 1,
  })
}
const setMinmapStatus = async () => {
  isShowMinmap.value = !isShowMinmap.value
  await nextTick()
  if (document.getElementById('minimap' + flowDomId)) {
    document.getElementById('minimap' + flowDomId).style.display = isShowMinmap.value
      ? 'block'
      : 'none'
  }
}
</script>

<style lang="scss" scoped>
.map-tool {
  width: 220px;
  height: 43px;
  position: absolute;
  right: 16px;
  bottom: 16px;
  background: #fff;
  display: flex;
  align-items: center;
  z-index: 200;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(5, 0, 56, 0.12);
  display: flex;
  justify-content: space-evenly;

  .scale-text {
    display: inline-block;
    width: 45px;
    user-select: none;
    text-align: center;
  }
}
.minimap_main {
  position: absolute;
  width: 220px;
  height: 140px;
  background-color: white;
  right: 0;
  bottom: 50px;
  z-index: 2;
  background: #fff;
  border-radius: 10px;
  z-index: 200;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 4px 16px rgba(5, 0, 56, 0.12);
}
</style>
