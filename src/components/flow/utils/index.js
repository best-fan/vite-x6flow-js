// 删除节点
export const delNode = (graph) => {
  const cells = graph.getSelectedCells()
  if (cells.length) {
    cells.forEach((cell) => {
      if (cell.isNode()) {
        graph.removeCell(cell)
      }
    })
  }
}

// 删除边
export const delEdge = (graph) => {
  const cells = graph.getSelectedCells()
  if (cells.length) {
    cells.forEach((cell) => {
      if (cell.isEdge()) {
        graph.removeCell(cell)
      }
    })
  }
}

// 复制选中
export const copyCells = (graph) => {
  const cells = graph.getSelectedCells()
  if (cells.length) {
    graph.copy(cells)
  }
}

// 粘贴剪贴板
export const pasteCells = (graph) => {
  if (!graph.isClipboardEmpty()) {
    const cells = graph.paste({ offset: 32 })
    graph.cleanSelection()
    graph.select(cells)
  }
}

// 撤销操作
export const undoAction = (graph) => {
  if (graph.canUndo()) {
    graph.undo()
  }
}

// 重做操作
export const redoAction = (graph) => {
  if (graph.canRedo()) {
    graph.redo()
  }
}

// 选择所有节点
export const selectAllNodes = (graph) => {
  const nodes = graph.getNodes()
  if (nodes) {
    graph.select(nodes)
  }
}

// 设置节点连接桩是否可见
export const setNodePortsVisible = (node, visible = true) => {
  node.getPorts().forEach(({ id }) => {
    node.setPortProp(id, 'attrs/circle/style', {
      visibility: visible ? 'visible' : 'hidden',
    })
  })
}

// 设置所有节点的连接桩是否可见
export const setAllNodePortsVisible = (show = true,_graph) => {
  const container = _graph.view.container
  const ports = container.querySelectorAll('.x6-port-body')
  const showPorts = (ports, show) => {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden'
    }
  }
  _graph.disableHistory()
  showPorts(ports, show)
  _graph.enableHistory()
}
