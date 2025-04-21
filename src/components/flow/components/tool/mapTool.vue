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
    <div id="minimap"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { globalGraph } from '../../utils/graph.js'
const isShowMinmap = ref(true)
import TipTool from './tipTool.vue'
const zoomNum = ref(100)
onMounted(() => {
  setMinmapStatus()
})

const action = (type) => {
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
  globalGraph.exportPNG(`${new Date().getTime()}.png`, {
    width: 1920,
    height: 1080,
    padding: 20,
    quality: 1,
  })
}
const setMinmapStatus = async () => {
  isShowMinmap.value = !isShowMinmap.value
  await nextTick()
  if (document.getElementById('minimap')) {
    document.getElementById('minimap').style.display = isShowMinmap.value ? 'block' : 'none'
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
#minimap {
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
