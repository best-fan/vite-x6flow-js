import { Graph, Shape } from '@antv/x6'
import { Dnd } from '@antv/x6-plugin-dnd'
import { Transform } from '@antv/x6-plugin-transform'
import { Snapline } from '@antv/x6-plugin-snapline'
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { History } from '@antv/x6-plugin-history'
import { Selection } from '@antv/x6-plugin-selection'
import { MiniMap } from '@antv/x6-plugin-minimap'
import { Export } from '@antv/x6-plugin-export'
import {
  delNode,
  copyCells,
  pasteCells,
  undoAction,
  redoAction,
  selectAllNodes,
  setNodePortsVisible,
  setAllNodePortsVisible,
} from './index'

// 使用map 获取不同的graph

export let globalGraphList = new Map()

export let globalDndList = new Map()

//连线配置
let connectEdgeConfig = {
  attrs: {
    line: {
      stroke: '#000000',
      strokeWidth: 1,
      targetMarker: {
        name: 'classic',
        size: 10,
      },
      strokeDasharray: 0, //虚线
      style: {
        // animation: 'ant-line 30s infinite linear',
      },
    },
  },
  connector: 'normal', //normal 直线连接器  smooth  平滑连接器  rounded  圆角连接器  jumpover  跳线连接器
  router: {
    name: 'manhattan', //normal 默认路由  orth 	正交路由 oneSide 受限正交路由 manhattan 智能正交路由 metro 智能地铁线路由 er 实体关系路由
  },
  zIndex: 0,
}

//连线配置
export const setConnectEdgeConfig = (lineType, markerConfig) => {
  if (['line', 'lineAndArrow'].includes(lineType)) {
    Object.assign(connectEdgeConfig, { connector: 'normal', router: { name: '' } })
  }
  if (['brokenLine', 'brokenLineAndArrow'].includes(lineType)) {
    Object.assign(connectEdgeConfig, {
      connector: 'normal',
      router: { name: 'manhattan' },
    })
  }
  if (['curve', 'curveAndArrow'].includes(lineType)) {
    Object.assign(connectEdgeConfig, {
      connector: 'smooth',
      router: { name: '' },
    })
  }
  Object.assign(connectEdgeConfig.attrs.line, markerConfig)
}

// 创建画布
export const createGraph = (flowDomId, isEdit = true) => {
  if (globalGraphList.has(flowDomId)) {
    // console.log('画布已经初始化，直接返回实例');
    return Promise.resolve(globalGraphList.get(flowDomId)) // 如果已经初始化，直接返回已创建的实例
  }
  return new Promise((resolve, reject) => {
    const x6Container = document.getElementById(flowDomId)
    // console.log('创建画布',x6Container);
    
    let graphConfig = {
      container: x6Container,
      id: flowDomId,
      grid: {
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee', // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
          {
            color: '#ddd', // 次网格线颜色
            thickness: 1, // 次网格线宽度
            factor: 4, // 主次网格线间隔
          },
        ],
      },
      // 画布拖拽
      panning: {
        enabled: true,
        modifiers: ['ctrl'],
        eventTypes: ['leftMouseDown'],
      },
      // 节点连接
      connecting: {
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: true,
        createEdge() {
          const edge = new Shape.Edge(connectEdgeConfig)
          return edge
        },
      },
      interacting: function (cellView) {
        if (cellView.cell.getData() != undefined && cellView.cell.getData().disableMove) {
          return { nodeMovable: false }
        }
        return { edgeLabelMovable: true }
        // return true
      },
      // 缩放
      scaling: {
        min: 0.5,
        max: 2,
      },
    }
    if (!isEdit) {
      graphConfig.interacting = () => {
        return {
          nodeMovable: false,
          edgeMovable: false,
        }
      }
      graphConfig.panning = {
        // 画布拖拽
        enabled: true,
        modifiers: null,
        eventTypes: ['leftMouseDown'],
      }
      graphConfig.grid.visible = false
    }
    let graph = new Graph(graphConfig)
    let dnd = new Dnd({
      target: graph,
    })
    globalDndList.set(flowDomId, dnd)
    globalGraphList.set(flowDomId, graph)
    initGraphPlugins(graph, isEdit,flowDomId)
    addGraphEventListener(graph, isEdit)
    resolve(graph)
  })
}

// 初始化画布插件
function initGraphPlugins(graph, isEdit,flowDomId) {
  if (isEdit) {
    graph
      .use(
        // 添加变换插件
        new Transform({
          resizing: {
            enabled(node) {
              const { disableMove } = node.getData()
              if (disableMove) {
                return false
              }
              return true
            },
            minWidth: 10,
            // maxWidth: 400,
            minHeight: 10,
            // maxHeight: 400,
            orthogonal: false,
            restrict: false,
            preserveAspectRatio: false,
          },
          rotating: {
            enabled(node) {
              const { disableMove } = node.getData()
              if (disableMove) {
                return false
              }
              return true
            },
          },
        }),
      )
      // 添加网格线插件
      .use(
        new Snapline({
          enabled: true,
        }),
      )
      // 添加剪切板插件
      .use(
        new Clipboard({
          enabled: true,
          useLocalStorage: true,
        }),
      )
      // 框选
      .use(
        new Selection({
          enabled: true,
          multiple: true,
          rubberband: true,
          movable: true,
          showNodeSelectionBox: true,
          filter(node) {
            const { disableMove } = node.data || { disableMove: false }
            if (disableMove) {
              return false
            }
            return true
          },
        }),
      )
      // 添加快捷键
      .use(
        new Keyboard({
          enabled: true,
        }),
      )
      // 撤销重做功能
      .use(
        new History({
          enabled: true,
        }),
      )
     
  }
  // 小地图
  graph.use(
    new MiniMap({
      container: document.getElementById('minimap'+flowDomId),
      width: 220,
      height: 140,
      padding: 10,
    }),
  ).use(new Export())

}

// 快捷键事件
function addGraphEventListener(graph, isEdit) {
  if (!isEdit) {
    return
  }
  graph
    // 复制
    .bindKey(['meta+c', 'ctrl+c'], () => {
      copyCells(graph)

      return false
    })
    //粘贴
    .bindKey(['meta+v', 'ctrl+v'], () => {
      pasteCells(graph)

      return false
    })
    // 撤销
    .bindKey(['meta+z', 'ctrl+z'], () => {
      undoAction(graph)
      return false
    })
    // 重做
    .bindKey(['meta+y', 'ctrl+y'], () => {
      redoAction(graph)

      return false
    })
    // 全选
    .bindKey(['meta+a', 'ctrl+a'], () => {
      selectAllNodes(graph)
    })
    // 删除
    .bindKey(['backspace', 'delete'], () => {
      delNode(graph)
    })

  // // 鼠标悬停显示连接桩
  graph.on('node:mouseenter', ({ node }) => {
    // setNodePortsVisible(node, true)
    setAllNodePortsVisible(true, graph)
  })

  // // 鼠标离开隐藏连接桩
  graph.on('node:mouseleave', ({ node }) => {
    // setNodePortsVisible(node, false)
    setAllNodePortsVisible(false, graph)
  })
}

export const getGraphJsonData = (_graph) => {
  let graphData = _graph.toJSON()
  return graphData
}

// 画布框选状态切换
export const changeSelectionStatus = (isOpen = true, _graph) => {
  _graph.toggleRubberband(isOpen)
}

// 节点变换状态切换
export const changeNodeTransformStatus = (enabled = true, node, _graph) => {
  if (enabled) {
    _graph.createTransformWidget(node)
    return
  }
  _graph.clearTransformWidgets()
}

// 节点选中状态切换
export const changeNodeSelectStatus = (isSelected = true, node, _graph) => {
  if (isSelected) {
    _graph.select(node)
    return
  }
  _graph.unselect(node)
}

export const removeGlobalGraph = () => {
  globalGraphList.clear()
  globalDndList.clear()
}

// 获取当前画布和dnd实例
export const getThisGraphAndDnd = (id) => {
  let graph = globalGraphList.get(id)
  let dnd = globalDndList.get(id)
  return { graph, dnd }
}
