import { globalGraph, changeSelectionStatus } from './graph.js'

export class DrawingBoard {
  constructor(parentElementId) {
    // 初始化状态变量
    this.isDrawing = false
    this.lastX = 0
    this.lastY = 0
    this.paths = [] // 存储所有绘制的路径
    this.parentElementId = parentElementId || 'flow-container'
    this.canvasConfig = {
      id: 'flow-draw-canvas',
      stroke: {
        color: '#363333',
        width: 1,
      },
      style: {
        position: 'absolute',
        zIndex: 1000,
      },
      offset: {
        left: 60,
        top: 10,
      },
    }
  }
  initCanvas() {
    this.paths = [] // 清空保存的路径
    const { width, height } = document.getElementById(this.parentElementId).style
    // 动态创建 <canvas> 元素
    this.canvas = document.createElement('canvas')
    this.canvas.width = Number(width.replace('px', '')) - 80 || 800
    this.canvas.height = Number(height.replace('px', '')) - 75 || 600
    const { id, style, offset, stroke } = this.canvasConfig
    this.canvas.id = id
    Object.assign(this.canvas.style, {
      ...style,
      left: `${offset.left}px`,
      top: `${offset.top}px`,
    })
    document.getElementById(this.parentElementId).appendChild(this.canvas) // 将 canvas 插入到指定的父元素中
    this.ctx = this.canvas.getContext('2d')
    // 设置画笔的默认属性
    this.ctx.lineWidth = stroke.width
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = stroke.color

    changeSelectionStatus(false)
    const CROSSHAIR_CURSOR =
      'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAWFJREFUOBHFkb9Og1AUxgsxTTpQHXwBmZrUB0AGxj6EA4tDYSAEGR2gOrgQjAOLgyaGWKOP4OgCjEajz2AT0hlC8DsN14C1tE6e5Mv9c77z45xLp/OHKMuyC+1D/XoZXz+07VG4jfxJHMd6nucuzntt/qUcCgRoYhjGPZKlJEnPWZZdbAyCsQ9ZYRheEYCpAvmUX/pq/QKGRQe+71+naRqMRqMnBqE1SZIAnmG9prGvAK5pmosRRFF8q4NoNHgcqNsoZIcK4FiWNcXd9wgMRKPBM4F+H2UVgME8z7uB53gtwLbtO1ZUX3Vdf0DxKUS/ezmQoEd0/g9APaGDI9d1b2n7U5qmtY9QAbaKorgUBGHWAtgh78pAF8MoigIYGl2Mx+NH5M6gdgCRYTqkV2eQXq83p8fdGIBCDuZzRVEOBoPBTFXVT1mWC57n35Gbchw3x7o2CGLDtQu9Qi/QB4pzrBvHF5WKOd6JupulAAAAAElFTkSuQmCC") 1 16, auto'

    document.getElementById(id).style.cursor = CROSSHAIR_CURSOR // 设置为十字形鼠标
  }
  toDrawPath() {
    this.initCanvas()
    // 绑定事件
    this._bindEvents()
  }

  // 绑定鼠标事件
  _bindEvents() {
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e))
    this.canvas.addEventListener('mouseup', () => this.stopDrawing())
    this.canvas.addEventListener('mousemove', (e) => this.draw(e))
  }

  // 开始绘制
  startDrawing(e) {
    this.isDrawing = true
    this.lastX = e.offsetX
    this.lastY = e.offsetY
    this.currentPath = [] // 每次开始绘制新的路径
  }

  // 停止绘制
  stopDrawing() {
    this.isDrawing = false
    if (this.currentPath.length > 0) {
      this.paths.push(this.currentPath) // 保存当前路径
    }
    this.addPathNode()
    const id = this.canvasConfig.id
    document.getElementById(id).style.cursor = 'grab'
    changeSelectionStatus(true)
    document.getElementById(id).remove()
  }

  draw(e) {
    if (!this.isDrawing) return
    const currentX = e.offsetX
    const currentY = e.offsetY
    // 绘制路径
    this.ctx.beginPath()
    this.ctx.moveTo(this.lastX, this.lastY)
    this.ctx.lineTo(currentX, currentY)
    this.ctx.stroke()
    this.currentPath.push({ x: currentX, y: currentY })

    // 更新最后的位置
    this.lastX = currentX
    this.lastY = currentY
  }

  // 清空画布
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.paths = [] // 清空保存的路径
  }
  // 获取SVG路径数据
  getSvgPath() {
    let pathDataStr = ''
    this.paths.forEach((path) => {
      let pathData = path
        .map((point, index) => {
          return index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`
        })
        .join(' ')
      pathDataStr += pathData
    })
    return pathDataStr
  }
  addPathNode() {
    const pathDataStr = this.getSvgPath()
    const { width, height } = this.getNodeSize()
    const { upHight, leftWidth } = this.calculateOffsetDistance(this.paths.flat())
    const point = globalGraph.clientToLocal(this.paths.flat()[0].x, this.paths.flat()[0].y)
    const { offset, stroke } = this.canvasConfig
    const node = globalGraph.createNode({
      shape: 'path',
      x: point.x + offset.left - leftWidth,
      y: point.y + offset.top - upHight,
      width: width,
      height: height,
      path: pathDataStr,
      attrs: {
        path: {
          stroke: stroke.color,
          strokeWidth: stroke.width,
        },
      },
      data: {
        disableMove: false,
        shapeClassify: 'brushPathShape',
      },
    })
    globalGraph.addNode(node)
  }
  // 获取节点尺寸
  getNodeSize() {
    // 计算路径的边界框
    const xs = this.paths.flat().map((p) => p.x)
    const ys = this.paths.flat().map((p) => p.y)
    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    // 计算路径的宽度和高度
    const width = maxX - minX
    const height = maxY - minY
    return { width, height }
  }
  //计算偏移距离
  calculateOffsetDistance(coordinates) {
    let upHight = 0
    let leftWidth = 0
    let firstStratY = coordinates[0].y
    let firstStratX = coordinates[0].x
    const ys = coordinates.map((p) => p.y)
    const xs = coordinates.map((p) => p.x)
    const minY = Math.min(...ys)
    const minX = Math.min(...xs)

    if (firstStratY > minY) {
      //上移动
      upHight = firstStratY - minY
    }
    if (firstStratX > minX) {
      //左移动
      leftWidth = firstStratX - minX
    }
    return { upHight, leftWidth }
  }

  // 导出为SVG格式
  exportAsSVG() {
    let svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="${this.canvas.width}" height="${this.canvas.height}">
              <g>
      `
    // 生成SVG路径数据
    this.paths.forEach((path) => {
      let pathData = path
        .map((point, index) => {
          return index === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`
        })
        .join(' ')
      svgContent += `<path d="${pathData}" stroke="black" fill="transparent" stroke-width="5" />`
    })
    svgContent += `
              </g>
          </svg>
      `
    // 创建Blob并生成下载链接
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'drawing.svg'
    link.click()
  }
}
