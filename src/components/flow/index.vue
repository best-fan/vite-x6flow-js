<template>
  <div class="x6-flow">
    <div class="flow-container" :id="flowId"></div>
    <template v-if="x6Flow && isEditStatus">
      <panel :flowDomId="flowId"></panel>
      <node-setting-tool :flowDomId="flowId" ref="comNodeTool" />
      <edge-setting-tool :flowDomId="flowId" ref="comEdgeTool" />
    </template>
    <map-tool :flowDomId="flowId" />
  </div>
</template>
<script setup>
import { initRegister } from './utils/register';
import { createGraph, getGraphJsonData, removeGlobalGraph } from './utils/graph';
import Panel from './components/panel.vue';
import MapTool from './components/tool/mapTool.vue';
import nodeSettingTool from './components/tool/nodeSettingTool.vue';
import edgeSettingTool from './components/tool/edgeSettingTool.vue';

// 预览回显数据
const props = defineProps({
  config: {
    type: Object,
    default: () => {},
  },
  // 唯一 ID
  id: {
    type: String,
    default: `flow-${new Date().getTime()}`,
  },
  //区分是否 全屏弹窗
  modal: {
    type: Boolean,
    default: false,
  },
});
initRegister();
let x6Flow = ref(null);
const comNodeTool = ref(null);
const comEdgeTool = ref(null);

let baseConfig={ cells: [] };
// 用于区分 编辑模式 还是预览模式
const isEditStatus = ref(true);

//x6画布唯一ID
const flowId = computed(() => {
  return props.id + '_' + Number(isEditStatus.value) + '_' + Number(props.modal);
});
onMounted(() => {
  setEditStatus();
  initX6();
});
onUnmounted(() => {
  !props.modal && removeGlobalGraph();
});

async function initX6() {
  await nextTick();
  let graph = await createGraph(flowId.value, isEditStatus.value);
  x6Flow.value = graph;
  if (isEditStatus.value) {
    setupGraphEvents(graph);
  }
  //预览模式
  if (typeof props.config == 'object') {
    graph.fromJSON(props.config);
    return;
  }
  // 编辑模式回显
  // const baseData = await getConfig();
  // graph.fromJSON(baseData);
}
function setEditStatus() {
  isEditStatus.value = true;
  //预览模式
  if (typeof props.config == 'object') {
    isEditStatus.value = false;
  }
}
//
function setupGraphEvents(graph) {
  // 监听 节点点击事件
  graph.on('node:click', ({ node }) => {
    //显示工具面板
    comNodeTool?.value.show(node);
  });
  // 监听 边点击事件
  graph.on('edge:click', ({ e, x, y, edge }) => {
    comEdgeTool?.value.show(edge, { x, y });
  });
  // 监听 节点选中事件
  graph.on('selection:changed', (args) => {
    if (args.removed.length === 1) {
      args.removed.forEach((cell) => {
        if (cell.isEdge()) {
          cell.attr('line/strokeDasharray', 0); //正常线
          cell.attr('line/style', '');
          cell.removeTools();
          comEdgeTool?.value.hidden();
        }
        if (cell.isNode()) {
          comNodeTool?.value.hidden();
        }
      });
    }
    if (args.selected.length === 1) {
      args.added.forEach((cell) => {
        if (cell.isEdge()) {
          cell.attr('line/strokeDasharray', 5); //虚线蚂蚁线
          cell.attr('line/style', { animation: 'ant-line 30s infinite linear' });
          cell.addTools([
            // 路径点工具
            {
              name: 'vertices',
              args: {
                padding: 4,
                attrs: {
                  strokeWidth: 0.1,
                  stroke: '#2d8cf0',
                  fill: '#ffffff',
                },
              },
            },
            // 线段工具
            {
              name: 'segments',
              args: {
                snapRadius: 20,
                attrs: {
                  fill: '#444',
                },
              },
            },
            //连线末端修改
            'source-arrowhead',
            {
              name: 'target-arrowhead',
              args: {
                attrs: {
                  fill: 'red',
                },
              },
            },
          ]);
        }
      });
    }
  });
  graph.on('blank:click', ({ node }) => {
    comNodeTool?.value.hidden();
    comEdgeTool?.value.hidden();
  });

  // 监听节点添加、删除、修改事件
  graph
    .on('cell:added', () => getNewGraphJson(graph))
    .on('cell:removed', () => getNewGraphJson(graph))
    .on('cell:changed', () => getNewGraphJson(graph));
}
// 获取最新数据
function getNewGraphJson(graph) {
  const newGraphJson = getGraphJsonData(graph);
  baseConfig.cells = newGraphJson.cells;
}
</script>

<style lang="scss">
.x6-flow {
  width: 100%;
  height: 100%;
  position: relative;
  .flow-container {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    @keyframes ant-line {
      to {
        stroke-dashoffset: -1000;
      }
    }
  }

  .x6-widget-minimap-viewport {
    border: 2px solid #8f8f8f;
  }

  .x6-widget-minimap-viewport-zoom {
    border: 2px solid #8f8f8f;
  }
}
</style>
