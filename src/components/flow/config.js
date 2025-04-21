// 左侧菜单
export const pennelList = [
  {
    name: '选中',
    type: 'select',
    iconName: 'SquareDashedMousePointer',
  },
  {
    name: '文本',
    type: 'path',
    width: 120,
    height: 40,
    customType: 'text-block',
    iconName: 'Type',
    label: '文本',
    attrs: {
      body: {
        strokeWidth: 0,
        rx: 4,
        ry: 4,
      },
      label: {
        fontSize: 16,
        textAnchor: 'middle',
      },
    },
  },
  {
    name: '便利贴',
    type: 'stickyNode',
    // type: 'allRect',
    iconName: 'StickyNote',
    height: 40,
    width: 100,
  },
  {
    name: '图形',
    type: 'graphicList',
    iconName: 'Blocks',
    height: 40,
    width: 40,
  },
  {
    name: '设置连线',
    type: 'lineSetting',
    iconName: 'Slash',
    height: 40,
    width: 100,
  },
  {
    name: '图片',
    type: 'image',
    iconName: 'FileImage',
    height: 40,
    width: 100,
  },
  {
    name:'画笔',
    type:'penLine',
    iconName:'Pen',
  },
  {
    type: 'line',
    iconName: 'MoveUpRight',
  },
  {
    name: '撤销',
    type: 'undo',
    iconName: 'Undo',
  },
  {
    name: '重做',
    type: 'redo',
    iconName: 'Redo',
  },
]

// 节点连接点
export const nodePorts = {
  ports: {
    groups: {
      in: {
        position: 'top',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#8f8f8f',
            r: 5,
            style: {
              visibility: 'hidden', // 设置连接桩隐藏
            },
          },
        },
      },
      out: {
        position: 'bottom',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#8f8f8f',
            r: 5,
            style: {
              visibility: 'hidden', // 设置连接桩隐藏
            },
          },
        },
      },
      left: {
        position: 'left',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#8f8f8f',
            r: 5,
            style: {
              visibility: 'hidden', // 设置连接桩隐藏
            },
          },
        },
      },
      right: {
        position: 'right',
        attrs: {
          circle: {
            magnet: true,
            stroke: '#8f8f8f',
            r: 5,
            style: {
              visibility: 'hidden', // 设置连接桩隐藏
            },
          },
        },
      },
    },
    items: [
      { id: 'port1', group: 'in' },
      { id: 'port2', group: 'out' },
      { id: 'port3', group: 'left' },
      { id: 'port4', group: 'right' },
    ],
  },
}

// 便利贴板数据
export const stickyNodeList = [
  {
    width: 144,
    height: 161,
    backgroundColor: '#F5F6F8',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#FDFBB2',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#D1F893',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#F2D42B',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#C5E158',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#FEA048',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#8ED376',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#F26E7E',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#66C5C0',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#EB94BB',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#6ED6FA',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#FFCEE0',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#A8CAF5',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#C086C7',
    textFillStyle: '#333',
    fontSize: 16,
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#838DFF',
    textFillStyle: '#fff',
  },
  {
    width: 144,
    height: 161,
    backgroundColor: '#000000',
    textFillStyle: '#fff',
  },
]
