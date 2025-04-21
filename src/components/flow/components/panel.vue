<template>
  <div class="panel-tools">
    <template v-for="(item, index) in pennelList" :key="index">
      <span class="line" v-if="item.type == 'line'"></span>
      <n-tooltip v-else placement="right" trigger="hover">
        <template #trigger>
          <icons
            size="20"
            :name="item.iconName"
            class="tool-svg"
            :class="{
              disabled: (item.type === 'undo' && !undoEnabled) || (item.type === 'redo' && !redoEnabled),
            }"
            @mousedown="toolsClick(item, $event)"
          />
        </template>
        <span> {{ item.name }} </span>
      </n-tooltip>
    </template>
    <stickyNodeList ref="comStickyNodeList" :flowDomId="flowDomId" />
    <baseNodeList ref="comBaseNodeList" :flowDomId="flowDomId" />
    <lineSettingsPanel ref="comLineSettingsPanel" :flowDomId="flowDomId" />
  </div>
</template>

<script setup>
import { getThisGraphAndDnd, changeSelectionStatus } from '../utils/graph';
import { pennelList, nodePorts } from '../config';
import { DrawingBoard } from '../utils/draw';
import stickyNodeList from './pannel/stickyNodePanel.vue';
import baseNodeList from './pannel/baseNodePanel.vue';
import lineSettingsPanel from './pannel/lineSettingsPanel.vue';
// 预览回显数据
const { flowDomId } = defineProps({
  flowDomId: {
    type: String,
    default: '',
  },
});
const undoEnabled = ref(false);
const redoEnabled = ref(false);
const comStickyNodeList = ref(null);
const comBaseNodeList = ref(null);
const comLineSettingsPanel = ref(null);
let drawingBoard = null;
const { graph: globalGraph, dnd: globalDnd } = getThisGraphAndDnd(flowDomId);
onMounted(() => {
  drawingBoard = new DrawingBoard(flowDomId);
  globalGraph.on('history:change', () => {
    undoEnabled.value = globalGraph.canUndo();
    redoEnabled.value = globalGraph.canRedo();
  });
});
let toolClickParams = {
  data: null,
  event: null,
};

// 点击事件
const toolsClick = (item, e) => {
  const { type } = item;
  console.log('handleMouseDown', item, e);
  let node = null;
  switch (type) {
    case 'select':
      changeSelectionStatus(true, globalGraph);
      break;
    case 'undo':
      globalGraph.undo();
      break;
    case 'redo':
      globalGraph.redo();
      break;
    case 'stickyNode':
      console.log('便利贴');
      comStickyNodeList.value?.open();
      break;
    case 'graphicList':
      comBaseNodeList.value?.open();
      break;
    case 'lineSetting':
      comLineSettingsPanel.value?.open();
      break;
    case 'image':
      const imageNode = globalGraph.createNode({
        shape: type,
        width: 60,
        height: 40,
        imageUrl: 'https://gips3.baidu.com/it/u=1327179017,961530922&fm=3028&app=3028&f=JPEG&fmt=auto?w=2560&h=1920',
        label: '图片',
        ...nodePorts,
        attrs: {
          label: {
            refX: 0.5,
            refY: '100%',
            refY2: 4,
            textAnchor: 'middle',
            textVerticalAnchor: 'top',
          },
        },
        data: {
          disableMove: false, //false 为可拖拽，true不可拖拽
          shapeClassify: 'imageShape',
        },
      });
      imageNode.addTools({
        name: 'node-editor',
      });
      globalDnd.start(imageNode, e);
      break;
    case 'penLine':
      // console.log('画笔')
      drawingBoard.toDrawPath();
      break;
    default:
      node = globalGraph.createNode({
        shape: type,
        ...item,
        ...nodePorts,
        data: {
          shapeClassify: `${type == 'path' ? 'text' : type}Shape`,
          disableMove: false, //false 为可拖拽，true不可拖拽
        },
      });
      node.addTools({
        name: 'node-editor',
      });
      globalDnd.start(node, e);
      break;
  }
};
</script>

<style lang="scss" scoped>
.panel-tools {
  position: absolute;
  padding: 10px 3px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(5, 0, 56, 0.12);
  height: min-content;
  margin: auto 0;
  width: 46px;
  z-index: 99;
  top: 10px;
  left: 10px;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .tool-svg {
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      stroke: #4f8ff1;
    }
  }
  .disabled {
    stroke: #cdccd7;
    cursor: not-allowed;
    &:hover {
      stroke: #cdccd7;
    }
  }
  .line {
    display: inline-block;
    box-sizing: border-box;
    height: 1px;
    width: 100%;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    background: #e8e8e8;
  }
}
</style>

<style lang="scss">
.flow-my-img-library {
  .dialog-body {
    min-height: 350px;
    div.title-control {
      display: none;
    }
  }
}
</style>
