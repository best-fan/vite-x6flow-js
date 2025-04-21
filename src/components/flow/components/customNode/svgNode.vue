<template>
  <div class="custom-node">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      overflow="visible"
      viewBox="0 0 1024 1024"
      :fill="svgFill"
      :width="svgStyle.width"
      :height="svgStyle.height"
      preserveAspectRatio="none"
      v-bind:innerHTML="svgContent"
    ></svg>
    <span v-if="textLabel" class="node-label" :style="labelStyle">{{ textLabel }}</span>
  </div>
</template>
<script setup>
import { FunctionExt } from '@antv/x6'
const getNode = inject('getNode') // 注入 getNode 方法
const svgFill = ref('#333')
const nodeData = ref({}) // 定义响应式数据
const svgContent = ref('')
const svgStyle = ref({ width: '100%', height: '100%' })
const labelStyle = ref({ fontSize: '', color: '', justifyContent: 'center' })
const textLabel = ref('')
onMounted(() => {
  const node = getNode() // 获取当前节点实例
  nodeData.value = getNode()
  if (node) {
    const { content } = node.getData() || { content: '' } // 初始化节点数据
    svgContent.value = content
    updateNodeSize()
    addNodeEventListener(node)
  }
})
// 监听节点数据变化
const addNodeEventListener = (node) => {
  // node.on('change:data', (data) => {
  //   console.log('change:data', data)
  // })

  node.on(
    'change:size',
    FunctionExt.debounce(({ node }) => {
      updateNodeSize()
    }),
    100,
  )
  node.on(
    'change:attrs',
    FunctionExt.debounce(({ node }) => {
      updateNodeSize()
    }),
    100,
  )
}

async function updateNodeSize() {
  await nextTick()
  const { width, height } = nodeData.value.size()
  const { attrs } = nodeData.value
  const { label, text, rect } = attrs

  svgStyle.value = {
    width,
    height,
  }
  textLabel.value = text?.text || ''
  const textAlign = label?.textAnchor || 'middle'
  labelStyle.value = {
    color: label?.fill || 'black',
    fontSize: label?.fontSize || '16px',
    justifyContent:
      textAlign == 'middle' ? 'center' : textAlign == 'start' ? 'flex-end' : 'flex-start',
  }
  svgFill.value = rect?.fill || '#333'

  return
}
</script>
<style lang="scss" scoped>
.custom-node {
  position: relative;
  .node-label {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
