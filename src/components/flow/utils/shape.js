//图形库分类
/* 
https://boardserver.lessonplan.cn/catalog */
// {
//   title: '基础图形',
//   content: '',
//   sortId: 10,
//   _id: '634620bac15b861924ca55b6',
//   catalogId: null,
//   createTime: '2022-10-12T02:04:42.426Z',
//   __v: 0,
// },
export const graphGroupList = [
  {
    title: '基础图形',
    type: 'baseShape', // 分类
  },
  // {
  //   title: '流体动力',
  //   type: 'hydrodynamic',
  // },
  // {
  //   title: 'UI',
  //   type: 'UI',
  // },
  {
    title: 'E-R图',
    type: 'erShape',
  },
  {
    title: '流程图',
    type: 'flowShape',
  },
  // {
  //   title: 'UML',
  //   type: 'UML',
  // },
]

//基础图形
export const baseShape = [
  {
    title: '圆形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h/2',
          },
          {
            action: 'curve',
            x1: '0',
            y1: '-h/6',
            x2: 'w',
            y2: '-h/6',
            x: 'w',
            y: 'h/2',
          },
          {
            action: 'curve',
            x1: 'w',
            y1: 'h+h/6',
            x2: '0',
            y2: 'h+h/6',
            x: '0',
            y: 'h/2',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '矩形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '圆角矩形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: '4',
          },
          {
            action: 'quadraticCurve',
            x1: '0',
            y1: '0',
            x: '4',
            y: '0',
          },
          {
            action: 'line',
            x: 'w-4',
            y: '0',
          },
          {
            action: 'quadraticCurve',
            x1: 'w',
            y1: '0',
            x: 'w',
            y: '4',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h-4',
          },
          {
            action: 'quadraticCurve',
            x1: 'w',
            y1: 'h',
            x: 'w-4',
            y: 'h',
          },
          {
            action: 'line',
            x: '4',
            y: 'h',
          },
          {
            action: 'quadraticCurve',
            x1: '0',
            y1: 'h',
            x: '0',
            y: 'h-4',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '三角形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w/2',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '直角三角形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '菱形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h/2',
          },
          {
            action: 'line',
            x: 'w/2',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h/2',
          },
          {
            action: 'line',
            x: 'w/2',
            y: 'h',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '五边形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w/2',
            y: '0',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.39',
          },
          {
            action: 'line',
            x: 'w*0.18',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.82',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.39',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '六边形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'Math.min(w,h)*0.21',
            y: '0',
          },
          {
            action: 'line',
            x: 'w-Math.min(w,h)*0.21',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h * 0.5',
          },
          {
            action: 'line',
            x: 'w-Math.min(w,h)*0.21',
            y: 'h',
          },
          {
            action: 'line',
            x: 'Math.min(w,h)*0.21',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h * 0.5',
          },
          {
            action: 'line',
            x: 'Math.min(w,h)*0.21',
            y: '0',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '八边形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'Math.min(w,h)*0.29',
            y: '0',
          },
          {
            action: 'line',
            x: 'w-Math.min(w,h)*0.29',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.29',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.71',
          },
          {
            action: 'line',
            x: 'w-Math.min(w,h)*0.29',
            y: 'h',
          },
          {
            action: 'line',
            x: 'Math.min(w,h)*0.29',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.71',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.29',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '五角星',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w*0.62',
            y: 'h*0.38',
          },
          {
            action: 'line',
            x: 'w*0.5',
            y: '0',
          },
          {
            action: 'line',
            x: 'w*0.38',
            y: 'h*0.38',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.38',
          },
          {
            action: 'line',
            x: 'w*0.3',
            y: 'h*0.62',
          },
          {
            action: 'line',
            x: 'w*0.18',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.5',
            y: 'h*0.76',
          },
          {
            action: 'line',
            x: 'w*0.82',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.7',
            y: 'h*0.62',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.38',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '扇形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w/2',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: '0.134*h',
          },
          {
            action: 'quadraticCurve',
            x1: 'w/2',
            y1: '-0.134*h',
            x: 'w',
            y: 'h*0.134',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '扇形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w*0.25',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: '0.238*h',
          },
          {
            action: 'quadraticCurve',
            x1: 'w/2',
            y1: '-0.238*h',
            x: 'w',
            y: 'h*0.238',
          },
          {
            action: 'line',
            x: 'w*0.75',
            y: 'h',
          },
          {
            action: 'quadraticCurve',
            x1: 'w/2',
            y1: '0.8*h',
            x: 'w*0.25',
            y: 'h',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '十字形',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w*0.5-Math.min(w,h)/8',
            y: '0',
          },
          {
            action: 'line',
            x: 'w*0.5+Math.min(w,h)/8',
            y: '0',
          },
          {
            action: 'line',
            x: 'w*0.5+Math.min(w,h)/8',
            y: 'h*0.5-Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.5-Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.5+Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: 'w*0.5+Math.min(w,h)/8',
            y: 'h*0.5+Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: 'w*0.5+Math.min(w,h)/8',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.5-Math.min(w,h)/8',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.5-Math.min(w,h)/8',
            y: 'h*0.5+Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.5+Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.5-Math.min(w,h)/8',
          },
          {
            action: 'line',
            x: 'w*0.5-Math.min(w,h)/8',
            y: 'h*0.5-Math.min(w,h)/8',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '云',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0.12*w',
            y: '0.7*h',
          },
          {
            action: 'curve',
            x1: '-0.1*w',
            y1: '0.5*h',
            x2: '0.04*w',
            y2: '0.35*h',
            x: '0.09*w',
            y: '0.3*h',
          },
          {
            action: 'curve',
            x1: '0.07*w',
            y1: '0.05*h',
            x2: '0.32*w',
            y2: '0.0*h',
            x: '0.42*w',
            y: '0.1*h',
          },
          {
            action: 'curve',
            x1: '0.50*w',
            y1: '-0.05*h',
            x2: '0.75*w',
            y2: '0.0*h',
            x: '0.75*w',
            y: '0.15*h',
          },
          {
            action: 'curve',
            x1: '0.95*w',
            y1: '0.1*h',
            x2: '1.03*w',
            y2: '0.3*h',
            x: '0.95*w',
            y: '0.55*h',
          },
          {
            action: 'curve',
            x1: '1.02*w',
            y1: '0.75*h',
            x2: '0.95*w',
            y2: '1.0*h',
            x: '0.72*w',
            y: '0.9*h',
          },
          {
            action: 'curve',
            x1: '0.67*w',
            y1: '1.03*h',
            x2: '0.47*w',
            y2: '1.03*h',
            x: '0.42*w',
            y: '0.9*h',
          },
          {
            action: 'curve',
            x1: '0.32*w',
            y1: '1.0*h',
            x2: '0.12*w',
            y2: '0.95*h',
            x: '0.12*w',
            y: '0.7*h',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '气泡',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h/2',
          },
          {
            action: 'curve',
            x1: '0',
            y1: '-h/6',
            x2: 'w',
            y2: '-h/6',
            x: 'w',
            y: 'h/2',
          },
          {
            action: 'quadraticCurve',
            x1: 'w*0.98',
            y1: 'h*0.98',
            x: 'w/2',
            y: 'h',
          },
          {
            action: 'quadraticCurve',
            x1: 'w/3',
            y1: 'h',
            x: 'w/6',
            y: 'h*0.9',
          },
          {
            action: 'line',
            x: '0',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.117',
            y: 'h*0.857',
          },
          {
            action: 'quadraticCurve',
            x1: '0',
            y1: '0.7*h',
            x: '0',
            y: 'h/2',
          },
        ],
      },
    ],
  },
  {
    title: 'APQC',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h/8',
          },
          {
            action: 'quadraticCurve',
            x1: 'w*0.5',
            y1: '-h/8',
            x: 'w',
            y: 'h/8',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h/8',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '水滴',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h/2',
          },
          {
            action: 'curve',
            x1: 'w',
            y1: 'h+h/6',
            x2: '0',
            y2: 'h+h/6',
            x: '0',
            y: 'h*0.5',
          },
          {
            action: 'quadraticCurve',
            x1: '0',
            y1: '0',
            x: 'w/2',
            y: '0',
          },
          {
            action: 'line',
            x: 'w/2',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: '0',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '左箭头',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h/2',
          },
          {
            action: 'line',
            x: 'Math.min(0.5*h,0.45*w)',
            y: '0',
          },
          {
            action: 'line',
            x: 'Math.min(0.5*h,0.45*w)',
            y: 'h*0.33',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.33',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.67',
          },
          {
            action: 'line',
            x: 'Math.min(0.5*h,0.45*w)',
            y: 'h*0.67',
          },
          {
            action: 'line',
            x: 'Math.min(0.5*h,0.45*w)',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h/2',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '右箭头',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h*0.33',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: 'h*0.33',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.5',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: 'h*0.67',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.67',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.33',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '左右箭头',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'h*0.5',
          },
          {
            action: 'line',
            x: 'Math.min(h*0.5,w*0.45)',
            y: '0',
          },
          {
            action: 'line',
            x: 'Math.min(h*0.5,w*0.45)',
            y: 'h*0.33',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: 'h*0.33',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h*0.5',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w-Math.min(h*0.5,w*0.45)',
            y: 'h*0.67',
          },
          {
            action: 'line',
            x: 'Math.min(h*0.5,w*0.45)',
            y: 'h*0.67',
          },
          {
            action: 'line',
            x: 'Math.min(h*0.5,w*0.45)',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h*0.5',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '上箭头',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w*0.5',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.67',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.67',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.33',
            y: 'h',
          },
          {
            action: 'line',
            x: 'w*0.33',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: '0',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.5',
            y: '0',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '下箭头',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w*0.33',
            y: '0',
          },
          {
            action: 'line',
            x: 'w*0.67',
            y: '0',
          },
          {
            action: 'line',
            x: 'w*0.67',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.5',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.33',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.33',
            y: '0',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '上下箭头',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: 'w*0.5',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.67',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.67',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.5',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.33',
            y: 'h-Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.33',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: '0',
            y: 'Math.min(w*0.5,h*0.45)',
          },
          {
            action: 'line',
            x: 'w*0.5',
            y: '0',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '拐角',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: '0',
          },
          {
            action: 'line',
            x: 'w-Math.min(w/6,30)',
            y: 'Math.min(h/6,30)',
          },
          {
            action: 'line',
            x: 'Math.min(w/6,30)',
            y: 'Math.min(h/6,30)',
          },
          {
            action: 'line',
            x: 'Math.min(w/6,30)',
            y: 'h-Math.min(h/6,30)',
          },
          {
            action: 'line',
            x: '0',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: '0',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
  {
    title: '卡片',
    path: [
      {
        actions: [
          {
            action: 'move',
            x: '0',
            y: 'Math.min(h/2,w/4)',
          },
          {
            action: 'line',
            x: 'Math.min(h/2,w/4)',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: '0',
          },
          {
            action: 'line',
            x: 'w',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'h',
          },
          {
            action: 'line',
            x: '0',
            y: 'Math.min(h/2,w/4)',
          },
          {
            action: 'close',
          },
        ],
      },
    ],
  },
]

//E-R图
export const ERShape = [
  {
    title: '键值属性',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M864.29 241.81c-46.93-29.2-102.12-51.82-164-67.23-59.69-14.85-122.86-22.37-187.79-22.37s-128.1 7.52-187.74 22.37c-61.93 15.41-117.12 38-164 67.23C55.57 307.23 0 400.66 0 512s55.57 204.77 160.71 270.19c46.93 29.2 102.12 51.82 164 67.23 59.69 14.85 122.86 22.37 187.79 22.37s128.1-7.52 187.74-22.37c61.93-15.41 117.12-38 164-67.23C969.43 716.77 1025 623.34 1025 512s-55.57-204.77-160.71-270.19z m-3.7 534.44c-91.77 57.1-215.39 88.54-348.09 88.54s-256.32-31.44-348.09-88.54C61.43 712.17 7 620.8 7 512s54.43-200.17 157.41-264.25c91.77-57.1 215.39-88.54 348.09-88.54s256.32 31.44 348.09 88.54C963.57 311.83 1018 403.2 1018 512s-54.43 200.17-157.41 264.25z" p-id="1322"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><ellipse cx="15.95" cy="14.79" rx="14.499999999999998" ry="8.7" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all"></ellipse></g></g><g></g><g></g></g></svg>',
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0a44c15b861924cac36f',
    path: [
      {
        d: 'M864.29 241.81c-46.93-29.2-102.12-51.82-164-67.23-59.69-14.85-122.86-22.37-187.79-22.37s-128.1 7.52-187.74 22.37c-61.93 15.41-117.12 38-164 67.23C55.57 307.23 0 400.66 0 512s55.57 204.77 160.71 270.19c46.93 29.2 102.12 51.82 164 67.23 59.69 14.85 122.86 22.37 187.79 22.37s128.1-7.52 187.74-22.37c61.93-15.41 117.12-38 164-67.23C969.43 716.77 1025 623.34 1025 512s-55.57-204.77-160.71-270.19z m-3.7 534.44c-91.77 57.1-215.39 88.54-348.09 88.54s-256.32-31.44-348.09-88.54C61.43 712.17 7 620.8 7 512s54.43-200.17 157.41-264.25c91.77-57.1 215.39-88.54 348.09-88.54s256.32 31.44 348.09 88.54C963.57 311.83 1018 403.2 1018 512s-54.43 200.17-157.41 264.25z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '多值属性',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M864.29 241.81c-46.93-29.2-102.12-51.82-164-67.23-59.69-14.85-122.86-22.37-187.79-22.37s-128.1 7.52-187.74 22.37c-61.93 15.41-117.12 38-164 67.23C55.57 307.23 0 400.66 0 512s55.57 204.77 160.71 270.19c46.93 29.2 102.12 51.82 164 67.23 59.69 14.85 122.86 22.37 187.79 22.37s128.1-7.52 187.74-22.37c61.93-15.41 117.12-38 164-67.23C969.43 716.77 1025 623.34 1025 512s-55.57-204.77-160.71-270.19z m-3.7 534.44c-91.77 57.1-215.39 88.54-348.09 88.54s-256.32-31.44-348.09-88.54C61.43 712.17 7 620.8 7 512s54.43-200.17 157.41-264.25c91.77-57.1 215.39-88.54 348.09-88.54s256.32 31.44 348.09 88.54C963.57 311.83 1018 403.2 1018 512s-54.43 200.17-157.41 264.25z" p-id="1459"/><path xmlns="http://www.w3.org/2000/svg" d="M845.83 255.9c-44.47-27.67-96.77-49.1-155.45-63.7C633.87 178.13 574.02 171 512.5 171s-121.37 7.13-177.88 21.2c-58.68 14.6-111 36-155.45 63.7C79.5 317.91 26.85 406.46 26.85 512S79.5 706.09 179.17 768.1c44.47 27.67 96.77 49.1 155.45 63.7C391.13 845.87 450.98 853 512.5 853s121.37-7.13 177.88-21.2c58.68-14.6 111-36 155.45-63.7C945.5 706.09 998.15 617.54 998.15 512S945.5 317.91 845.83 255.9z m-3.7 506.25C755.23 816.22 638.17 846 512.5 846s-242.73-29.78-329.63-83.85C85.38 701.49 33.85 615 33.85 512s51.53-189.49 149-250.15C269.77 207.78 386.83 178 512.5 178s242.73 29.78 329.63 83.85c97.49 60.66 149 147.16 149 250.15s-51.51 189.49-149 250.15z" p-id="1460"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><ellipse cx="15.95" cy="14.79" rx="14.499999999999998" ry="8.7" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all"></ellipse><ellipse cx="15.95" cy="14.79" rx="13.34" ry="7.539999999999999" fill="none" stroke="white" stroke-width="9.3" pointer-events="stroke" visibility="hidden"></ellipse><ellipse cx="15.95" cy="14.79" rx="13.34" ry="7.539999999999999" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all"></ellipse></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.20289855072463758,
      y: 0.3387681159420288,
      width: 0.5815217391304348,
      height: 0.3170289855072464,
      id: 'b7ad4b',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0aa9c15b861924cac373',
    linkPoint: [
      {
        x: 0.5018115942028986,
        y: 0.1503623188405797,
        id: '2926ed',
      },
      {
        x: 0.5036231884057971,
        y: 0.8532608695652174,
        id: '602c18',
      },
    ],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:08:41.652Z',
    __v: 0,
    path: [
      {
        d: 'M864.29 241.81c-46.93-29.2-102.12-51.82-164-67.23-59.69-14.85-122.86-22.37-187.79-22.37s-128.1 7.52-187.74 22.37c-61.93 15.41-117.12 38-164 67.23C55.57 307.23 0 400.66 0 512s55.57 204.77 160.71 270.19c46.93 29.2 102.12 51.82 164 67.23 59.69 14.85 122.86 22.37 187.79 22.37s128.1-7.52 187.74-22.37c61.93-15.41 117.12-38 164-67.23C969.43 716.77 1025 623.34 1025 512s-55.57-204.77-160.71-270.19z m-3.7 534.44c-91.77 57.1-215.39 88.54-348.09 88.54s-256.32-31.44-348.09-88.54C61.43 712.17 7 620.8 7 512s54.43-200.17 157.41-264.25c91.77-57.1 215.39-88.54 348.09-88.54s256.32 31.44 348.09 88.54C963.57 311.83 1018 403.2 1018 512s-54.43 200.17-157.41 264.25z',
        fill: null,
        stroke: null,
      },
      {
        d: 'M845.83 255.9c-44.47-27.67-96.77-49.1-155.45-63.7C633.87 178.13 574.02 171 512.5 171s-121.37 7.13-177.88 21.2c-58.68 14.6-111 36-155.45 63.7C79.5 317.91 26.85 406.46 26.85 512S79.5 706.09 179.17 768.1c44.47 27.67 96.77 49.1 155.45 63.7C391.13 845.87 450.98 853 512.5 853s121.37-7.13 177.88-21.2c58.68-14.6 111-36 155.45-63.7C945.5 706.09 998.15 617.54 998.15 512S945.5 317.91 845.83 255.9z m-3.7 506.25C755.23 816.22 638.17 846 512.5 846s-242.73-29.78-329.63-83.85C85.38 701.49 33.85 615 33.85 512s51.53-189.49 149-250.15C269.77 207.78 386.83 178 512.5 178s242.73 29.78 329.63 83.85c97.49 60.66 149 147.16 149 250.15s-51.51 189.49-149 250.15z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '概化',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M515.597843 254.25091V0h-7.195686v254.25091H35.679443l472.722714 513.375353v256.373737h7.195686V767.626263L988.390322 254.25091zM512 761.227882L51.555798 261.227337h920.888404z" p-id="1599"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>概化</title><polygon points="3.57 8 28.47 8 15.98 21.79 3.57 8" fill="#fff"/><path d="M16.1,7.74V.58h-.2V7.74H2.58L15.9,22.2v7.22h.2V22.2L29.42,7.74ZM16,22,3,7.94H29Z" fill="#040000"/><path d="M16.7,30H15.3V22.43L1.21,7.14H15.3V0h1.4V7.14H30.79L16.7,22.43ZM4.4,8.54,16,21.13,27.6,8.54Z" fill="#231815"/></svg>',
    text: {
      x: 0.33695652173913043,
      y: 0.3278985507246377,
      width: 0.32608695652173914,
      height: 0.17753623188405798,
      id: 'e9a7fd',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0acec15b861924cac377',
    linkPoint: [],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:09:18.785Z',
    __v: 0,
    path: [
      {
        d: 'M515.597843 254.25091V0h-7.195686v254.25091H35.679443l472.722714 513.375353v256.373737h7.195686V767.626263L988.390322 254.25091zM512 761.227882L51.555798 261.227337h920.888404z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: ' 关系',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M514 155.59l-2-1.4L0.84 512 510 868.41l2 1.4L1023.16 512zM13 512l499-349.27L1011 512 512 861.27z" p-id="1738"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>关系</title><polygon points="15.97 5.05 1.68 14.91 15.97 24.92 30.32 14.98 15.97 5.05" fill="#fff"/><path d="M16.06,4.6l-.06,0L1.09,15,15.94,25.4l.06,0L30.91,15ZM1.44,15,16,4.81,30.56,15,16,25.19Z" fill="#040000"/><path d="M16,26.17l-.34-.24L0,15,16,3.83l.35.24-.1.18,0,0,.11-.17L32,15ZM2.49,15,16,24.46,29.51,15,16,5.54Z" fill="#040000"/></svg>',
    text: {
      x: 0.26268115942028986,
      y: 0.36775362318840576,
      width: 0.4673913043478261,
      height: 0.2463768115942029,
      id: '037975',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0aedc15b861924cac37b',
    linkPoint: [
      {
        x: 0.5018115942028986,
        y: 0.15579710144927536,
        id: 'ff8dca',
      },
      {
        x: 0.4963768115942029,
        y: 0.8460144927536232,
        id: 'd71384',
      },
    ],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:09:49.701Z',
    __v: 0,
    path: [
      {
        d: 'M514 155.59l-2-1.4L0.84 512 510 868.41l2 1.4L1023.16 512zM13 512l499-349.27L1011 512 512 861.27z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '弱实体',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M3.92 170.78v682.43h1016.15V170.78z m1009.15 675.43H10.92V177.78h1002.15z" p-id="1877"/><path xmlns="http://www.w3.org/2000/svg" d="M956 233.05H68V791h888zM949 784H75V240.05h874z" p-id="1878"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.45 6.09 L 30.45 23.49 L 1.45 23.49 L 1.45 6.09 Z M 4.35 8.99 L 4.35 20.59 L 27.55 20.59 L 27.55 8.99 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: null,
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0b6cc15b861924cac37f',
    linkPoint: [
      {
        x: 0.4891304347826087,
        y: 0.17028985507246377,
        id: 'f2bec9',
      },
      {
        x: 0.49818840579710155,
        y: 0.8333333333333334,
        id: 'be8c3e',
      },
    ],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:11:56.650Z',
    __v: 0,
    path: [
      {
        d: 'M3.92 170.78v682.43h1016.15V170.78z m1009.15 675.43H10.92V177.78h1002.15z',
        fill: null,
        stroke: null,
      },
      {
        d: 'M956 233.05H68V791h888zM949 784H75V240.05h874z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '全部概化',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M609.08 254.84V1.18h-7.25v253.66H422.17V1.18h-7.25v253.66H36.75L508.37 767v255.79h7.26V767l471.62-512.16zM512 760.63L52.71 261.84h918.58z" p-id="2017"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 30"><defs><linearGradient id="未命名的渐变" x1="2.64" y1="15" x2="29.36" y2="15" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1"/></linearGradient></defs><title>全部概化</title><polygon points="3.53 7.97 15.94 21.5 28.27 7.97 3.53 7.97" fill="#fff"/><path d="M18.73,7.77V.64h-.21V7.77h-5V.64h-.21V7.77H2.64L15.9,22.17v7.19h.2V22.17L29.36,7.77ZM16,22,3.09,8H28.91Z" fill="url(#未命名的渐变)"/><path d="M16.7,30H15.3V22.4L1.27,7.17h11.4V0h1.41V7.17h3.84V0h1.41V7.17h11.4L16.7,22.4ZM4.46,8.57,16,21.1,27.54,8.57Z" fill="#040000"/></svg>',
    text: {
      x: 0.3025362318840581,
      y: 0.31340579710144917,
      width: 0.391304347826087,
      height: 0.17572463768115942,
      id: '1d8dea',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0c42c15b861924cac383',
    linkPoint: [
      {
        x: 0.40942028985507245,
        y: 0.0036231884057971015,
        id: '19f649',
      },
      {
        x: 0.5887681159420289,
        y: 0.009057971014492754,
        id: '990d9c',
      },
    ],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:15:30.205Z',
    __v: 0,
    path: [
      {
        d: 'M609.08 254.84V1.18h-7.25v253.66H422.17V1.18h-7.25v253.66H36.75L508.37 767v255.79h7.26V767l471.62-512.16zM512 760.63L52.71 261.84h918.58z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '弱关系',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M514 155.59l-2-1.4L0.84 512 510 868.41l2 1.4L1023.16 512zM13 512l499-349.27L1011 512 512 861.27z" p-id="2156"/><path xmlns="http://www.w3.org/2000/svg" d="M514 194.77l-2-1.4L56.82 512 512 830.63 967.18 512zM69 512l443-310.09L955 512 512 822.09z" p-id="2157"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>弱关系</title><polygon points="16 5.09 1.86 15 16 24.91 30.14 15 16 5.09" fill="#fff"/><path d="M16.06,4.66l-.06,0L1.18,15,15.94,25.34l.06,0L30.82,15ZM1.53,15,16,4.87,30.47,15,16,25.13Z" fill="#040000"/><path d="M16,26.11l-.34-.24L.13,15,16,3.89,31.87,15ZM2.58,15,16,24.4,29.42,15,16,5.6Z" fill="#040000"/><path d="M16.05,7.53l-.05,0L5.28,15,16,22.51,26.72,15ZM5.56,15,16,7.69,26.44,15,16,22.31Z" fill="#040000"/><path d="M16,23.24,4.23,15,16,6.76l.35.24-.09.15,0,0L16.39,7l11.38,8ZM6.61,15,16,21.57,25.39,15,16,8.43Z" fill="#040000"/></svg>',
    text: {
      x: 0.29710144927536225,
      y: 0.3931159420289855,
      width: 0.391304347826087,
      height: 0.20108695652173914,
      id: 'd8ca5d',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0c59c15b861924cac387',
    linkPoint: [
      {
        x: 0.5,
        y: 0.15760869565217392,
        id: 'be2ba4',
      },
      {
        x: 0.5,
        y: 0.8478260869565217,
        id: '5192f9',
      },
    ],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:15:53.211Z',
    __v: 0,
    path: [
      {
        d: 'M514 155.59l-2-1.4L0.84 512 510 868.41l2 1.4L1023.16 512zM13 512l499-349.27L1011 512 512 861.27z',
        fill: null,
        stroke: null,
      },
      {
        d: 'M514 194.77l-2-1.4L56.82 512 512 830.63 967.18 512zM69 512l443-310.09L955 512 512 822.09z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '派生属性',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M30.41 616.53L23.88 619c1.44 3.75 3 7.54 4.59 11.24l6.42-2.79c-1.56-3.57-3.07-7.26-4.48-10.92zM39.84 638.26l-6.29 3.06c1.76 3.62 3.62 7.25 5.54 10.81l6.16-3.33c-1.87-3.47-3.69-7.01-5.41-10.54zM22.88 594.07L16.15 596c1.12 3.88 2.33 7.78 3.62 11.6l6.63-2.23c-1.25-3.71-2.4-7.52-3.52-11.3zM45.06 662.66c2 3.45 4.21 6.91 6.41 10.29l5.87-3.82c-2.15-3.3-4.26-6.68-6.26-10zM17.28 571.05l-6.86 1.37c0.79 4 1.67 8 2.61 11.85l6.81-1.65c-0.93-3.8-1.79-7.7-2.56-11.57zM73.16 702.23c2.58 3.08 5.26 6.18 8 9.19l5.2-4.68c-2.66-3-5.29-6-7.81-9zM58.31 683c2.33 3.28 4.76 6.56 7.23 9.76l5.54-4.27c-2.41-3.13-4.79-6.34-7.07-9.55zM17.26 453.07l-6.87-1.37c-0.78 3.94-1.49 8-2.12 12l6.92 1.08c0.61-3.95 1.3-7.87 2.07-11.71zM13.6 476.48l-7-0.8c-0.46 4-0.84 8.06-1.15 12.08l7 0.53c0.32-3.94 0.7-7.91 1.15-11.81zM94.45 715.41l-5 4.87c2.79 2.88 5.68 5.76 8.59 8.56l4.86-5c-2.9-2.79-5.72-5.61-8.45-8.43zM11.81 524l-7 0.26c0.15 4 0.38 8.12 0.68 12.12l7-0.53c-0.3-3.93-0.49-7.92-0.68-11.85zM11.59 512c0-3.95 0.07-7.95 0.22-11.87l-7-0.25c-0.14 4-0.22 8.08-0.22 12.12v0.1h7zM22.84 430l-6.72-1.94C15 432 14 435.92 13 439.84l6.8 1.65c0.94-3.82 1.96-7.68 3.04-11.49zM13.61 547.64l-6.95 0.8c0.46 4 1 8.06 1.63 12l6.92-1.09c-0.61-3.84-1.15-7.79-1.6-11.71zM320.93 844.77c3.83 1 7.77 2 11.72 2.91l1.62-6.81c-3.9-0.93-7.8-1.9-11.6-2.87zM297.65 838.34c3.83 1.14 7.74 2.25 11.61 3.32l1.87-6.74c-3.84-1.06-7.7-2.17-11.49-3.29zM274.62 831.05c3.76 1.27 7.62 2.53 11.48 3.76l2.12-6.68c-3.83-1.21-7.64-2.46-11.36-3.71zM344.41 850.38c3.92 0.87 7.89 1.71 11.81 2.5l1.39-6.86c-3.88-0.78-7.81-1.62-11.69-2.47zM391.87 859.22c3.91 0.59 7.93 1.18 11.94 1.73l0.95-6.94c-4-0.54-8-1.12-11.83-1.71zM251.89 822.87c3.72 1.42 7.53 2.84 11.33 4.2l2.37-6.58a590.22 590.22 0 0 1-11.2-4.16zM368.07 855.19c3.93 0.73 7.92 1.44 11.88 2.11l1.17-6.9c-3.92-0.67-7.88-1.37-11.77-2.09zM229.51 813.76c3.66 1.58 7.41 3.15 11.14 4.67l2.64-6.48c-3.69-1.5-7.39-3.06-11-4.62zM144.88 767.13c3.29 2.29 6.67 4.57 10 6.78l3.83-5.86a448.09 448.09 0 0 1-9.87-6.66zM165.13 780.4c3.38 2.09 6.88 4.18 10.38 6.22l3.52-6c-3.45-2-6.89-4.07-10.22-6.12zM125.43 752.71c3.12 2.46 6.36 4.94 9.62 7.36l4.17-5.63c-3.21-2.37-6.39-4.81-9.46-7.23zM106.89 737.1c3 2.67 6 5.34 9.15 7.95l4.5-5.35c-3-2.56-6.06-5.19-9-7.81zM207.53 803.67c3.6 1.75 7.28 3.49 10.93 5.17l2.92-6.36c-3.6-1.66-7.23-3.37-10.78-5.1zM186 792.57c3.48 1.91 7.08 3.82 10.68 5.68l3.22-6.22c-3.56-1.84-7.1-3.72-10.53-5.6zM189.3 237.63l-3.37-6.14c-3.54 1.95-7.08 3.95-10.53 5.95l3.52 6.05c3.39-1.97 6.89-3.95 10.38-5.86zM392.8 171.72l-1.05-6.92c-4 0.61-8 1.26-11.92 1.92l1.17 6.9c3.9-0.62 7.87-1.3 11.8-1.9zM369.23 175.72l-1.23-6.88c-3.95 0.73-7.93 1.51-11.85 2.3l1.4 6.86c3.82-0.79 7.77-1.56 11.68-2.28zM416.42 168.49l-0.84-7c-4 0.48-8 1-11.93 1.54l1 6.93c3.85-0.48 7.83-0.96 11.77-1.47zM299.52 192.4l-2-6.71c-3.86 1.15-7.75 2.34-11.54 3.54l2.11 6.67c3.76-1.18 7.61-2.36 11.43-3.5zM322.55 186l-1.74-6.77c-3.91 1-7.84 2.05-11.67 3.11l1.87 6.75c3.79-1.02 7.67-2.09 11.54-3.09zM345.8 180.48l-1.51-6.83c-3.93 0.86-7.89 1.77-11.76 2.7l1.62 6.81c3.85-0.92 7.76-1.82 11.65-2.68zM440.15 166l-0.63-7c-4 0.36-8 0.75-12 1.17l0.74 7c3.95-0.44 7.94-0.83 11.89-1.17zM1010.4 476.42l7-0.81c-0.46-4-1-8.07-1.63-12l-6.92 1.08c0.56 3.84 1.09 7.79 1.55 11.73zM984.18 385.79l6.29-3.06c-1.75-3.62-3.62-7.25-5.54-10.81l-6.16 3.32c1.88 3.47 3.69 7.02 5.41 10.55zM1012.19 500.07l7-0.26c-0.16-4-0.39-8.12-0.69-12.12l-7 0.53c0.32 3.91 0.5 7.9 0.69 11.85zM1006.73 453l6.86-1.37c-0.78-4-1.66-7.95-2.61-11.85l-6.8 1.65c0.92 3.81 1.82 7.7 2.55 11.57zM1001.14 430l6.72-1.94a282.44 282.44 0 0 0-3.61-11.6l-6.64 2.23c1.25 3.71 2.44 7.51 3.53 11.31zM993.61 407.52l6.53-2.51c-1.44-3.75-3-7.54-4.59-11.24l-6.42 2.78c1.57 3.62 3.07 7.31 4.48 10.97zM129.66 276.87l-4.34-5.49c-3.17 2.5-6.33 5.08-9.39 7.65l4.51 5.36c3-2.53 6.11-5.06 9.22-7.52zM39.81 385.82l-6.3-3.06a269.22 269.22 0 0 0-5.08 11.07l6.42 2.78c1.56-3.61 3.23-7.24 4.96-10.79zM78.47 326.33l-5.37-4.48c-2.6 3.11-5.15 6.29-7.6 9.46l5.5 4.28c2.43-3.1 4.93-6.21 7.47-9.26zM111.47 292.2l-4.68-5.2c-3 2.71-6 5.49-8.87 8.26l4.85 5c2.82-2.69 5.75-5.41 8.7-8.06zM276.75 199.62l-2.24-6.62c-3.82 1.29-7.66 2.63-11.41 4l2.37 6.58c3.71-1.36 7.53-2.68 11.28-3.96zM64 345.12l-5.71-4.05c-2.33 3.28-4.63 6.65-6.81 10l5.86 3.83c2.12-3.28 4.36-6.57 6.66-9.78zM51.06 365l-6-3.58c-2.06 3.46-4.07 7-6 10.56l6.16 3.33c1.86-3.51 3.83-6.98 5.84-10.31zM94.36 308.68l-5-4.87c-2.82 2.91-5.6 5.9-8.28 8.87l5.2 4.68c2.59-2.91 5.32-5.83 8.08-8.68zM210.48 226.68l-3.06-6.3c-3.63 1.78-7.27 3.6-10.81 5.43l3.21 6.22c3.49-1.81 7.08-3.61 10.66-5.35zM232.17 216.72l-2.78-6.43c-3.7 1.6-7.41 3.26-11 4.92l2.92 6.37c3.54-1.65 7.21-3.28 10.86-4.86zM254.28 207.71l-2.51-6.53c-3.75 1.43-7.53 2.93-11.24 4.44l2.64 6.48c3.66-1.49 7.4-2.97 11.11-4.39zM168.7 249.62l-3.68-6a445.2 445.2 0 0 0-10.21 6.5l3.84 5.86c3.28-2.12 6.66-4.27 10.05-6.36zM148.78 262.69l-4-5.75c-3.32 2.32-6.63 4.69-9.84 7.07l4.17 5.63c3.16-2.34 6.41-4.64 9.67-6.95zM415.78 862.49c4 0.48 8 0.94 12 1.36l0.73-7c-4-0.42-8-0.88-11.92-1.35zM30.37 407.58l-6.54-2.51c-1.44 3.77-2.82 7.61-4.1 11.44l6.64 2.22c1.25-3.73 2.63-7.48 4-11.15zM875.26 761.29l4 5.74c3.32-2.31 6.63-4.69 9.84-7.07l-4.17-5.63c-3.16 2.34-6.41 4.67-9.67 6.96zM889 264l-4.17 5.63c3.2 2.37 6.38 4.8 9.45 7.23l4.34-5.5c-3.14-2.51-6.38-4.98-9.62-7.36zM869.13 250.12l-3.84 5.88c3.32 2.18 6.64 4.43 9.87 6.67l4-5.74c-3.28-2.32-6.66-4.6-10.03-6.81zM855.34 774.35l3.68 6c3.44-2.12 6.88-4.31 10.22-6.5L865.4 768c-3.29 2.11-6.67 4.26-10.06 6.35zM912.57 731.77l4.68 5.2c3-2.71 6-5.49 8.87-8.26l-4.85-5c-2.82 2.67-5.75 5.4-8.7 8.06zM783.4 205.59l-2.64 6.48c3.69 1.51 7.4 3.06 11 4.62l2.78-6.43c-3.65-1.58-7.4-3.15-11.14-4.67zM908 279l-4.5 5.35c3 2.56 6 5.19 9 7.81l4.68-5.2c-3.01-2.7-6.08-5.38-9.18-7.96zM813.56 797.3l3.07 6.29c3.62-1.76 7.25-3.59 10.8-5.42l-3.21-6.17c-3.5 1.76-7.09 3.56-10.66 5.3zM805.58 215.18l-2.92 6.37c3.62 1.65 7.25 3.37 10.79 5.1l3.06-6.3c-3.59-1.75-7.26-3.49-10.93-5.17zM791.88 807.26l2.78 6.43c3.71-1.61 7.42-3.27 11-4.93l-2.92-6.36c-3.53 1.6-7.2 3.28-10.86 4.86zM439.86 865c4 0.36 8.07 0.69 12.06 1l0.52-7c-3.95-0.29-8-0.62-11.95-1zM827.32 225.77l-3.21 6.23c3.53 1.83 7.07 3.71 10.53 5.6l3.36-6.13c-3.5-1.93-7.1-3.85-10.68-5.7zM834.75 786.35l3.36 6.13c3.56-2 7.1-4 10.54-6l-3.52-6c-3.39 1.97-6.88 3.94-10.38 5.87zM848.53 237.4l-3.52 6c3.45 2 6.89 4.07 10.23 6.13l3.68-6c-3.39-2-6.92-4.09-10.39-6.13zM894.38 747.1l4.34 5.49c3.16-2.5 6.32-5.07 9.39-7.66l-4.51-5.35c-3.01 2.54-6.11 5.07-9.22 7.52zM984.21 638.14l6.3 3.06c1.76-3.63 3.47-7.36 5.08-11.07l-6.42-2.79a252.62 252.62 0 0 1-4.96 10.8zM1006.75 570.89l6.87 1.36c0.78-4 1.5-8 2.12-12l-6.92-1.08c-0.61 3.93-1.3 7.83-2.07 11.72zM929.68 715.28l5 4.87c2.82-2.92 5.61-5.9 8.28-8.87l-5.21-4.68c-2.58 2.9-5.31 5.82-8.07 8.68zM1001.17 593.91l6.73 1.94a311.6 311.6 0 0 0 3.11-11.74l-6.81-1.65c-0.92 3.83-1.95 7.68-3.03 11.45zM1012.41 512c0 4-0.07 7.93-0.22 11.82l7 0.26c0.15-4 0.22-8 0.22-12.08zM1010.41 547.47l7 0.8c0.46-4 0.85-8.06 1.15-12.08l-7-0.53c-0.33 3.94-0.7 7.91-1.15 11.81zM993.65 616.37l6.54 2.51c1.44-3.78 2.82-7.62 4.1-11.43l-6.64-2.23a269.59 269.59 0 0 1-4 11.15zM958.49 331.3l-5.49 4.27c2.42 3.14 4.8 6.35 7.07 9.55l5.7-4.06c-2.37-3.27-4.77-6.56-7.28-9.76zM945.56 697.63l5.38 4.48c2.58-3.1 5.14-6.28 7.59-9.46l-5.53-4.28c-2.41 3.11-4.91 6.22-7.44 9.26zM942.89 312.62l-5.2 4.68c2.66 2.95 5.29 6 7.81 9l5.37-4.49c-2.57-3.08-5.26-6.18-7.98-9.19zM972.56 351.09l-5.87 3.83c2.14 3.29 4.25 6.67 6.26 10l6-3.58c-2.04-3.41-4.2-6.88-6.39-10.25zM960.05 678.84l5.71 4c2.33-3.28 4.63-6.65 6.81-10l-5.86-3.82c-2.14 3.32-4.38 6.61-6.66 9.82zM973 659l6 3.58c2.07-3.48 4.08-7 6-10.57l-6.16-3.32C977 652.15 975 655.62 973 659zM926 295.19l-4.85 5.05c2.86 2.75 5.69 5.57 8.41 8.38l5-4.87c-2.73-2.87-5.62-5.75-8.56-8.56zM547.68 163.55c4 0.18 8 0.39 12 0.62l0.41-7c-4-0.23-8.06-0.44-12.07-0.62zM536.2 860.88l0.21 7c4-0.12 8-0.27 12.05-0.45l-0.31-7c-3.99 0.18-8.01 0.33-11.95 0.45zM560.08 859.8l0.42 7c4-0.24 8-0.51 12-0.81l-0.52-7c-3.98 0.31-7.98 0.58-11.9 0.81zM596.24 160.16l-0.74 7c4 0.42 8 0.87 11.93 1.35l0.84-6.95c-3.97-0.56-8.02-0.98-12.03-1.4zM572.13 158l-0.52 7c4 0.3 8 0.63 11.95 1l0.63-7c-4-0.38-8.06-0.71-12.06-1zM523.73 162.85c4 0.05 8 0.14 12 0.26l0.2-7c-4-0.12-8.08-0.21-12.08-0.26zM583.9 858l0.62 7c4-0.36 8-0.76 12-1.18l-0.74-7c-3.96 0.45-7.95 0.84-11.88 1.18zM499.7 155.85l0.11 7c3.95-0.06 8-0.09 11.95-0.09v-7c-4.01 0-8.07 0.03-12.06 0.09zM475.59 156.58l0.32 7c4-0.18 8-0.33 11.94-0.45l-0.21-7c-3.99 0.11-8.04 0.27-12.05 0.45zM512.29 861.24v7c4 0 8.06 0 12.06-0.09l-0.1-7c-3.97 0.06-8 0.09-11.96 0.09zM451.53 158l0.52 7c3.95-0.3 8-0.57 11.92-0.81l-0.42-7c-3.99 0.26-8.04 0.53-12.02 0.81zM464 866.82c4 0.24 8.08 0.45 12.07 0.62l0.31-7c-3.95-0.17-8-0.38-12-0.62zM488.14 867.89c4 0.12 8.05 0.21 12.07 0.27l0.11-7c-4-0.06-8-0.15-12-0.27zM607.62 855.51l0.85 7c4-0.49 8-1 11.93-1.54l-0.95-6.94c-3.89 0.48-7.87 0.97-11.83 1.48zM678.25 843.51l1.51 6.83c3.88-0.85 7.84-1.76 11.76-2.7l-1.62-6.81c-3.9 0.93-7.81 1.83-11.65 2.68zM724.53 831.58l2 6.71c3.86-1.14 7.75-2.33 11.54-3.54l-2.07-6.67c-3.8 1.19-7.65 2.37-11.47 3.5zM714.79 182.35l-1.87 6.75c3.83 1.06 7.7 2.16 11.49 3.28l2-6.71c-3.85-1.13-7.75-2.25-11.62-3.32zM737.94 189.21l-2.11 6.67c3.8 1.21 7.62 2.46 11.35 3.72l2.24-6.64c-3.77-1.27-7.63-2.53-11.48-3.75zM760.83 196.94l-2.37 6.59c3.76 1.35 7.52 2.75 11.19 4.16l2.51-6.54a651.62 651.62 0 0 0-11.33-4.21zM747.3 824.36l2.24 6.64c3.81-1.29 7.65-2.63 11.41-4l-2.37-6.58c-3.72 1.35-7.51 2.67-11.28 3.94zM701.5 838l1.74 6.78c3.86-1 7.79-2 11.67-3.11l-1.91-6.8c-3.8 1.06-7.68 2.13-11.5 3.13zM667.83 171.13l-1.4 6.86c3.9 0.79 7.83 1.62 11.7 2.48l1.51-6.84c-3.91-0.86-7.88-1.7-11.81-2.5zM654.82 848.28l1.28 6.88c3.95-0.74 7.93-1.52 11.85-2.31l-1.4-6.86c-3.87 0.79-7.82 1.56-11.73 2.29zM644.1 166.71l-1.17 6.9c3.93 0.67 7.89 1.37 11.77 2.09l1.28-6.88c-3.92-0.73-7.92-1.44-11.88-2.11zM631.24 852.27l1.06 6.92c3.94-0.6 8-1.25 11.92-1.92l-1.17-6.9c-3.93 0.63-7.9 1.3-11.81 1.9zM769.77 816.27l2.5 6.54c3.75-1.44 7.54-2.93 11.24-4.44l-2.64-6.49c-3.66 1.49-7.4 2.97-11.1 4.39zM691.4 176.33l-1.62 6.81c3.88 0.93 7.78 1.89 11.6 2.88l1.74-6.78c-3.86-0.99-7.8-1.97-11.72-2.91zM620.24 163.06l-1 6.94c4 0.54 7.93 1.11 11.84 1.71l1-6.92c-3.84-0.6-7.86-1.18-11.84-1.73z" p-id="2296"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>派生属性</title><path d="M1.54,18.14l-.2.07a3.45,3.45,0,0,0,.14.34l.19-.08C1.62,18.36,1.58,18.25,1.54,18.14Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M2.37,20.14l.22.29.17-.13A3.15,3.15,0,0,1,2.54,20Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M1,13.93l-.21,0,0,.36.21,0Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M1,16.07l-.21,0c0,.12,0,.25.05.36l.21,0C1.06,16.31,1,16.19,1,16.07Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M9.56,24.8l.35.1.06-.2-.35-.1Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M11.68,25.31l.35.06,0-.21-.35-.06Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M7.52,24.06l.33.14L7.93,24l-.33-.14Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M5.58,23.06l.31.19L6,23.07l-.31-.19Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M3.83,21.76l.28.24.13-.16L4,21.6Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M11.71,4.9l0-.21-.35.07,0,.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M9.62,5.4l-.06-.2-.35.11.06.2Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M13.84,4.61l0-.21-.36,0,0,.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M31,13.93l.21,0c0-.12,0-.25-.05-.36l-.21,0C30.94,13.69,31,13.81,31,13.93Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M30.46,11.86l.2-.07a3.45,3.45,0,0,0-.14-.34l-.19.08C30.38,11.64,30.42,11.75,30.46,11.86Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M4,8.4l-.14-.16-.27.25.15.15Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M2.54,10l-.17-.12a3.13,3.13,0,0,0-.2.3l.17.11Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M7.6,6.13l-.09-.19-.33.15.09.19Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M5.69,7.12l-.11-.18-.31.19.12.18Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M1.53,11.86l-.19-.07c-.05.11-.09.23-.13.34l.2.07Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M26.31,22.88l.11.18a3.28,3.28,0,0,0,.31-.2l-.12-.17Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M28,21.6l.14.16.27-.25-.15-.15Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M24.15,5.8,24.07,6l.33.14.09-.19Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M27.89,8l-.13.16L28,8.4l.14-.16Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M24.41,23.87l.08.19.33-.15-.09-.19Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M13.83,25.6l.37,0v-.21l-.36,0Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M26.11,6.75,26,6.93l.31.19.11-.18Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M31,16.07l.21,0c0-.12,0-.24,0-.36l-.21,0Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M30.47,18.13l.19.08c.05-.11.09-.23.13-.34l-.2-.07Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M29.41,9.57l-.16.13.21.29.17-.12Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M29.46,20l.17.12c.07-.1.14-.2.2-.3l-.17-.11Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M17.81,4.37l0,.21.36,0,0-.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M18.16,25.39l0,.21.36,0,0-.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M15.63,4.3v.21H16V4.3Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M16,25.49v.21h.36v-.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M22.38,24.6l.06.2.35-.11-.06-.2Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M22.09,5.1,22,5.3l.35.1.06-.2Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M20.29,25.1l0,.21.35-.07,0-.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/><path d="M20,4.63l0,.21.36.06,0-.21Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.17210144927536236,
      y: 0.33333333333333326,
      width: 0.677536231884058,
      height: 0.30434782608695654,
      id: '953a70',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634e0ca2c15b861924cac38b',
    linkPoint: [
      {
        x: 0.5072463768115942,
        y: 0.15760869565217392,
        id: '1a9202',
      },
      {
        x: 0.5090579710144928,
        y: 0.8460144927536232,
        id: 'da92c4',
      },
    ],
    tags: [],
    catalogId: '634e0a14c15b861924cac369',
    createTime: '2022-10-18T02:17:06.667Z',
    __v: 0,
    path: [
      {
        d: 'M30.41 616.53L23.88 619c1.44 3.75 3 7.54 4.59 11.24l6.42-2.79c-1.56-3.57-3.07-7.26-4.48-10.92zM39.84 638.26l-6.29 3.06c1.76 3.62 3.62 7.25 5.54 10.81l6.16-3.33c-1.87-3.47-3.69-7.01-5.41-10.54zM22.88 594.07L16.15 596c1.12 3.88 2.33 7.78 3.62 11.6l6.63-2.23c-1.25-3.71-2.4-7.52-3.52-11.3zM45.06 662.66c2 3.45 4.21 6.91 6.41 10.29l5.87-3.82c-2.15-3.3-4.26-6.68-6.26-10zM17.28 571.05l-6.86 1.37c0.79 4 1.67 8 2.61 11.85l6.81-1.65c-0.93-3.8-1.79-7.7-2.56-11.57zM73.16 702.23c2.58 3.08 5.26 6.18 8 9.19l5.2-4.68c-2.66-3-5.29-6-7.81-9zM58.31 683c2.33 3.28 4.76 6.56 7.23 9.76l5.54-4.27c-2.41-3.13-4.79-6.34-7.07-9.55zM17.26 453.07l-6.87-1.37c-0.78 3.94-1.49 8-2.12 12l6.92 1.08c0.61-3.95 1.3-7.87 2.07-11.71zM13.6 476.48l-7-0.8c-0.46 4-0.84 8.06-1.15 12.08l7 0.53c0.32-3.94 0.7-7.91 1.15-11.81zM94.45 715.41l-5 4.87c2.79 2.88 5.68 5.76 8.59 8.56l4.86-5c-2.9-2.79-5.72-5.61-8.45-8.43zM11.81 524l-7 0.26c0.15 4 0.38 8.12 0.68 12.12l7-0.53c-0.3-3.93-0.49-7.92-0.68-11.85zM11.59 512c0-3.95 0.07-7.95 0.22-11.87l-7-0.25c-0.14 4-0.22 8.08-0.22 12.12v0.1h7zM22.84 430l-6.72-1.94C15 432 14 435.92 13 439.84l6.8 1.65c0.94-3.82 1.96-7.68 3.04-11.49zM13.61 547.64l-6.95 0.8c0.46 4 1 8.06 1.63 12l6.92-1.09c-0.61-3.84-1.15-7.79-1.6-11.71zM320.93 844.77c3.83 1 7.77 2 11.72 2.91l1.62-6.81c-3.9-0.93-7.8-1.9-11.6-2.87zM297.65 838.34c3.83 1.14 7.74 2.25 11.61 3.32l1.87-6.74c-3.84-1.06-7.7-2.17-11.49-3.29zM274.62 831.05c3.76 1.27 7.62 2.53 11.48 3.76l2.12-6.68c-3.83-1.21-7.64-2.46-11.36-3.71zM344.41 850.38c3.92 0.87 7.89 1.71 11.81 2.5l1.39-6.86c-3.88-0.78-7.81-1.62-11.69-2.47zM391.87 859.22c3.91 0.59 7.93 1.18 11.94 1.73l0.95-6.94c-4-0.54-8-1.12-11.83-1.71zM251.89 822.87c3.72 1.42 7.53 2.84 11.33 4.2l2.37-6.58a590.22 590.22 0 0 1-11.2-4.16zM368.07 855.19c3.93 0.73 7.92 1.44 11.88 2.11l1.17-6.9c-3.92-0.67-7.88-1.37-11.77-2.09zM229.51 813.76c3.66 1.58 7.41 3.15 11.14 4.67l2.64-6.48c-3.69-1.5-7.39-3.06-11-4.62zM144.88 767.13c3.29 2.29 6.67 4.57 10 6.78l3.83-5.86a448.09 448.09 0 0 1-9.87-6.66zM165.13 780.4c3.38 2.09 6.88 4.18 10.38 6.22l3.52-6c-3.45-2-6.89-4.07-10.22-6.12zM125.43 752.71c3.12 2.46 6.36 4.94 9.62 7.36l4.17-5.63c-3.21-2.37-6.39-4.81-9.46-7.23zM106.89 737.1c3 2.67 6 5.34 9.15 7.95l4.5-5.35c-3-2.56-6.06-5.19-9-7.81zM207.53 803.67c3.6 1.75 7.28 3.49 10.93 5.17l2.92-6.36c-3.6-1.66-7.23-3.37-10.78-5.1zM186 792.57c3.48 1.91 7.08 3.82 10.68 5.68l3.22-6.22c-3.56-1.84-7.1-3.72-10.53-5.6zM189.3 237.63l-3.37-6.14c-3.54 1.95-7.08 3.95-10.53 5.95l3.52 6.05c3.39-1.97 6.89-3.95 10.38-5.86zM392.8 171.72l-1.05-6.92c-4 0.61-8 1.26-11.92 1.92l1.17 6.9c3.9-0.62 7.87-1.3 11.8-1.9zM369.23 175.72l-1.23-6.88c-3.95 0.73-7.93 1.51-11.85 2.3l1.4 6.86c3.82-0.79 7.77-1.56 11.68-2.28zM416.42 168.49l-0.84-7c-4 0.48-8 1-11.93 1.54l1 6.93c3.85-0.48 7.83-0.96 11.77-1.47zM299.52 192.4l-2-6.71c-3.86 1.15-7.75 2.34-11.54 3.54l2.11 6.67c3.76-1.18 7.61-2.36 11.43-3.5zM322.55 186l-1.74-6.77c-3.91 1-7.84 2.05-11.67 3.11l1.87 6.75c3.79-1.02 7.67-2.09 11.54-3.09zM345.8 180.48l-1.51-6.83c-3.93 0.86-7.89 1.77-11.76 2.7l1.62 6.81c3.85-0.92 7.76-1.82 11.65-2.68zM440.15 166l-0.63-7c-4 0.36-8 0.75-12 1.17l0.74 7c3.95-0.44 7.94-0.83 11.89-1.17zM1010.4 476.42l7-0.81c-0.46-4-1-8.07-1.63-12l-6.92 1.08c0.56 3.84 1.09 7.79 1.55 11.73zM984.18 385.79l6.29-3.06c-1.75-3.62-3.62-7.25-5.54-10.81l-6.16 3.32c1.88 3.47 3.69 7.02 5.41 10.55zM1012.19 500.07l7-0.26c-0.16-4-0.39-8.12-0.69-12.12l-7 0.53c0.32 3.91 0.5 7.9 0.69 11.85zM1006.73 453l6.86-1.37c-0.78-4-1.66-7.95-2.61-11.85l-6.8 1.65c0.92 3.81 1.82 7.7 2.55 11.57zM1001.14 430l6.72-1.94a282.44 282.44 0 0 0-3.61-11.6l-6.64 2.23c1.25 3.71 2.44 7.51 3.53 11.31zM993.61 407.52l6.53-2.51c-1.44-3.75-3-7.54-4.59-11.24l-6.42 2.78c1.57 3.62 3.07 7.31 4.48 10.97zM129.66 276.87l-4.34-5.49c-3.17 2.5-6.33 5.08-9.39 7.65l4.51 5.36c3-2.53 6.11-5.06 9.22-7.52zM39.81 385.82l-6.3-3.06a269.22 269.22 0 0 0-5.08 11.07l6.42 2.78c1.56-3.61 3.23-7.24 4.96-10.79zM78.47 326.33l-5.37-4.48c-2.6 3.11-5.15 6.29-7.6 9.46l5.5 4.28c2.43-3.1 4.93-6.21 7.47-9.26zM111.47 292.2l-4.68-5.2c-3 2.71-6 5.49-8.87 8.26l4.85 5c2.82-2.69 5.75-5.41 8.7-8.06zM276.75 199.62l-2.24-6.62c-3.82 1.29-7.66 2.63-11.41 4l2.37 6.58c3.71-1.36 7.53-2.68 11.28-3.96zM64 345.12l-5.71-4.05c-2.33 3.28-4.63 6.65-6.81 10l5.86 3.83c2.12-3.28 4.36-6.57 6.66-9.78zM51.06 365l-6-3.58c-2.06 3.46-4.07 7-6 10.56l6.16 3.33c1.86-3.51 3.83-6.98 5.84-10.31zM94.36 308.68l-5-4.87c-2.82 2.91-5.6 5.9-8.28 8.87l5.2 4.68c2.59-2.91 5.32-5.83 8.08-8.68zM210.48 226.68l-3.06-6.3c-3.63 1.78-7.27 3.6-10.81 5.43l3.21 6.22c3.49-1.81 7.08-3.61 10.66-5.35zM232.17 216.72l-2.78-6.43c-3.7 1.6-7.41 3.26-11 4.92l2.92 6.37c3.54-1.65 7.21-3.28 10.86-4.86zM254.28 207.71l-2.51-6.53c-3.75 1.43-7.53 2.93-11.24 4.44l2.64 6.48c3.66-1.49 7.4-2.97 11.11-4.39zM168.7 249.62l-3.68-6a445.2 445.2 0 0 0-10.21 6.5l3.84 5.86c3.28-2.12 6.66-4.27 10.05-6.36zM148.78 262.69l-4-5.75c-3.32 2.32-6.63 4.69-9.84 7.07l4.17 5.63c3.16-2.34 6.41-4.64 9.67-6.95zM415.78 862.49c4 0.48 8 0.94 12 1.36l0.73-7c-4-0.42-8-0.88-11.92-1.35zM30.37 407.58l-6.54-2.51c-1.44 3.77-2.82 7.61-4.1 11.44l6.64 2.22c1.25-3.73 2.63-7.48 4-11.15zM875.26 761.29l4 5.74c3.32-2.31 6.63-4.69 9.84-7.07l-4.17-5.63c-3.16 2.34-6.41 4.67-9.67 6.96zM889 264l-4.17 5.63c3.2 2.37 6.38 4.8 9.45 7.23l4.34-5.5c-3.14-2.51-6.38-4.98-9.62-7.36zM869.13 250.12l-3.84 5.88c3.32 2.18 6.64 4.43 9.87 6.67l4-5.74c-3.28-2.32-6.66-4.6-10.03-6.81zM855.34 774.35l3.68 6c3.44-2.12 6.88-4.31 10.22-6.5L865.4 768c-3.29 2.11-6.67 4.26-10.06 6.35zM912.57 731.77l4.68 5.2c3-2.71 6-5.49 8.87-8.26l-4.85-5c-2.82 2.67-5.75 5.4-8.7 8.06zM783.4 205.59l-2.64 6.48c3.69 1.51 7.4 3.06 11 4.62l2.78-6.43c-3.65-1.58-7.4-3.15-11.14-4.67zM908 279l-4.5 5.35c3 2.56 6 5.19 9 7.81l4.68-5.2c-3.01-2.7-6.08-5.38-9.18-7.96zM813.56 797.3l3.07 6.29c3.62-1.76 7.25-3.59 10.8-5.42l-3.21-6.17c-3.5 1.76-7.09 3.56-10.66 5.3zM805.58 215.18l-2.92 6.37c3.62 1.65 7.25 3.37 10.79 5.1l3.06-6.3c-3.59-1.75-7.26-3.49-10.93-5.17zM791.88 807.26l2.78 6.43c3.71-1.61 7.42-3.27 11-4.93l-2.92-6.36c-3.53 1.6-7.2 3.28-10.86 4.86zM439.86 865c4 0.36 8.07 0.69 12.06 1l0.52-7c-3.95-0.29-8-0.62-11.95-1zM827.32 225.77l-3.21 6.23c3.53 1.83 7.07 3.71 10.53 5.6l3.36-6.13c-3.5-1.93-7.1-3.85-10.68-5.7zM834.75 786.35l3.36 6.13c3.56-2 7.1-4 10.54-6l-3.52-6c-3.39 1.97-6.88 3.94-10.38 5.87zM848.53 237.4l-3.52 6c3.45 2 6.89 4.07 10.23 6.13l3.68-6c-3.39-2-6.92-4.09-10.39-6.13zM894.38 747.1l4.34 5.49c3.16-2.5 6.32-5.07 9.39-7.66l-4.51-5.35c-3.01 2.54-6.11 5.07-9.22 7.52zM984.21 638.14l6.3 3.06c1.76-3.63 3.47-7.36 5.08-11.07l-6.42-2.79a252.62 252.62 0 0 1-4.96 10.8zM1006.75 570.89l6.87 1.36c0.78-4 1.5-8 2.12-12l-6.92-1.08c-0.61 3.93-1.3 7.83-2.07 11.72zM929.68 715.28l5 4.87c2.82-2.92 5.61-5.9 8.28-8.87l-5.21-4.68c-2.58 2.9-5.31 5.82-8.07 8.68zM1001.17 593.91l6.73 1.94a311.6 311.6 0 0 0 3.11-11.74l-6.81-1.65c-0.92 3.83-1.95 7.68-3.03 11.45zM1012.41 512c0 4-0.07 7.93-0.22 11.82l7 0.26c0.15-4 0.22-8 0.22-12.08zM1010.41 547.47l7 0.8c0.46-4 0.85-8.06 1.15-12.08l-7-0.53c-0.33 3.94-0.7 7.91-1.15 11.81zM993.65 616.37l6.54 2.51c1.44-3.78 2.82-7.62 4.1-11.43l-6.64-2.23a269.59 269.59 0 0 1-4 11.15zM958.49 331.3l-5.49 4.27c2.42 3.14 4.8 6.35 7.07 9.55l5.7-4.06c-2.37-3.27-4.77-6.56-7.28-9.76zM945.56 697.63l5.38 4.48c2.58-3.1 5.14-6.28 7.59-9.46l-5.53-4.28c-2.41 3.11-4.91 6.22-7.44 9.26zM942.89 312.62l-5.2 4.68c2.66 2.95 5.29 6 7.81 9l5.37-4.49c-2.57-3.08-5.26-6.18-7.98-9.19zM972.56 351.09l-5.87 3.83c2.14 3.29 4.25 6.67 6.26 10l6-3.58c-2.04-3.41-4.2-6.88-6.39-10.25zM960.05 678.84l5.71 4c2.33-3.28 4.63-6.65 6.81-10l-5.86-3.82c-2.14 3.32-4.38 6.61-6.66 9.82zM973 659l6 3.58c2.07-3.48 4.08-7 6-10.57l-6.16-3.32C977 652.15 975 655.62 973 659zM926 295.19l-4.85 5.05c2.86 2.75 5.69 5.57 8.41 8.38l5-4.87c-2.73-2.87-5.62-5.75-8.56-8.56zM547.68 163.55c4 0.18 8 0.39 12 0.62l0.41-7c-4-0.23-8.06-0.44-12.07-0.62zM536.2 860.88l0.21 7c4-0.12 8-0.27 12.05-0.45l-0.31-7c-3.99 0.18-8.01 0.33-11.95 0.45zM560.08 859.8l0.42 7c4-0.24 8-0.51 12-0.81l-0.52-7c-3.98 0.31-7.98 0.58-11.9 0.81zM596.24 160.16l-0.74 7c4 0.42 8 0.87 11.93 1.35l0.84-6.95c-3.97-0.56-8.02-0.98-12.03-1.4zM572.13 158l-0.52 7c4 0.3 8 0.63 11.95 1l0.63-7c-4-0.38-8.06-0.71-12.06-1zM523.73 162.85c4 0.05 8 0.14 12 0.26l0.2-7c-4-0.12-8.08-0.21-12.08-0.26zM583.9 858l0.62 7c4-0.36 8-0.76 12-1.18l-0.74-7c-3.96 0.45-7.95 0.84-11.88 1.18zM499.7 155.85l0.11 7c3.95-0.06 8-0.09 11.95-0.09v-7c-4.01 0-8.07 0.03-12.06 0.09zM475.59 156.58l0.32 7c4-0.18 8-0.33 11.94-0.45l-0.21-7c-3.99 0.11-8.04 0.27-12.05 0.45zM512.29 861.24v7c4 0 8.06 0 12.06-0.09l-0.1-7c-3.97 0.06-8 0.09-11.96 0.09zM451.53 158l0.52 7c3.95-0.3 8-0.57 11.92-0.81l-0.42-7c-3.99 0.26-8.04 0.53-12.02 0.81zM464 866.82c4 0.24 8.08 0.45 12.07 0.62l0.31-7c-3.95-0.17-8-0.38-12-0.62zM488.14 867.89c4 0.12 8.05 0.21 12.07 0.27l0.11-7c-4-0.06-8-0.15-12-0.27zM607.62 855.51l0.85 7c4-0.49 8-1 11.93-1.54l-0.95-6.94c-3.89 0.48-7.87 0.97-11.83 1.48zM678.25 843.51l1.51 6.83c3.88-0.85 7.84-1.76 11.76-2.7l-1.62-6.81c-3.9 0.93-7.81 1.83-11.65 2.68zM724.53 831.58l2 6.71c3.86-1.14 7.75-2.33 11.54-3.54l-2.07-6.67c-3.8 1.19-7.65 2.37-11.47 3.5zM714.79 182.35l-1.87 6.75c3.83 1.06 7.7 2.16 11.49 3.28l2-6.71c-3.85-1.13-7.75-2.25-11.62-3.32zM737.94 189.21l-2.11 6.67c3.8 1.21 7.62 2.46 11.35 3.72l2.24-6.64c-3.77-1.27-7.63-2.53-11.48-3.75zM760.83 196.94l-2.37 6.59c3.76 1.35 7.52 2.75 11.19 4.16l2.51-6.54a651.62 651.62 0 0 0-11.33-4.21zM747.3 824.36l2.24 6.64c3.81-1.29 7.65-2.63 11.41-4l-2.37-6.58c-3.72 1.35-7.51 2.67-11.28 3.94zM701.5 838l1.74 6.78c3.86-1 7.79-2 11.67-3.11l-1.91-6.8c-3.8 1.06-7.68 2.13-11.5 3.13zM667.83 171.13l-1.4 6.86c3.9 0.79 7.83 1.62 11.7 2.48l1.51-6.84c-3.91-0.86-7.88-1.7-11.81-2.5zM654.82 848.28l1.28 6.88c3.95-0.74 7.93-1.52 11.85-2.31l-1.4-6.86c-3.87 0.79-7.82 1.56-11.73 2.29zM644.1 166.71l-1.17 6.9c3.93 0.67 7.89 1.37 11.77 2.09l1.28-6.88c-3.92-0.73-7.92-1.44-11.88-2.11zM631.24 852.27l1.06 6.92c3.94-0.6 8-1.25 11.92-1.92l-1.17-6.9c-3.93 0.63-7.9 1.3-11.81 1.9zM769.77 816.27l2.5 6.54c3.75-1.44 7.54-2.93 11.24-4.44l-2.64-6.49c-3.66 1.49-7.4 2.97-11.1 4.39zM691.4 176.33l-1.62 6.81c3.88 0.93 7.78 1.89 11.6 2.88l1.74-6.78c-3.86-0.99-7.8-1.97-11.72-2.91zM620.24 163.06l-1 6.94c4 0.54 7.93 1.11 11.84 1.71l1-6.92c-3.84-0.6-7.86-1.18-11.84-1.73z',
        fill: null,
        stroke: null,
      },
    ],
  },
]
//流程图
export const flowShape = [
  {
    title: '顺序数据',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M873.11 873A511.22 511.22 0 1 0 512 1022.59h0.94v0.22l458.42-1.53v-7.91l-368.67 1.22A509.3 509.3 0 0 0 873.11 873zM9.22 511.89C9.22 234.66 234.77 9.12 512 9.12s502.78 225.54 502.78 502.77S789.23 1014.67 512 1014.67 9.22 789.12 9.22 511.89z" p-id="5833"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><ellipse cx="15.98" cy="14.96" rx="13.600000000000001" ry="13.600000000000001" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all"></ellipse><path d="M 15.98 28.56 L 29.58 28.56" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 15.98 28.56 L 29.58 28.56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.22282608695652173,
      y: 0.3152173913043479,
      width: 0.5615942028985508,
      height: 0.3695652173913043,
      id: 'c12961',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476452c15b861924ca605f',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:05:22.173Z',
    __v: 0,
    path: [
      {
        d: 'M873.11 873A511.22 511.22 0 1 0 512 1022.59h0.94v0.22l458.42-1.53v-7.91l-368.67 1.22A509.3 509.3 0 0 0 873.11 873zM9.22 511.89C9.22 234.66 234.77 9.12 512 9.12s502.78 225.54 502.78 502.77S789.23 1014.67 512 1014.67 9.22 789.12 9.22 511.89z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '梯形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M863.67 221.47l-0.8-2.92h-700.5L1 805.45h1022z m-695.27 5h688.42l155.81 571.06H11.39z" p-id="5970"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><path d="M 1.44 22.08 L 6.24 7.68 L 25.44 7.68 L 30.24 22.08 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.27355072463768115,
      y: 0.35507246376811596,
      width: 0.447463768115942,
      height: 0.3007246376811594,
      id: 'de1878',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347646bc15b861924ca6063',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:05:47.955Z',
    __v: 0,
    path: [
      {
        d: 'M863.67 221.47l-0.8-2.92h-700.5L1 805.45h1022z m-695.27 5h688.42l155.81 571.06H11.39z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '水平泳道',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1.23 69.28v885.44h1021.54V69.28zM9.16 363l191.48 0.17V660.3l-191.48-0.16z m199.41 0.17l806.27 0.69V661l-806.27-0.69z m806.27-7.17l-806.27-0.68V77.21h806.27zM200.64 77.21v278.05L9.16 355.1V77.21zM9.16 668.06l191.48 0.16v278.57H9.16z m199.41 278.73V668.23l806.27 0.69v277.87z" p-id="6107"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.56 4.8 L 1.56 3.6 L 30.36 3.6 L 30.36 4.8" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 1.56 4.8 L 1.56 26.4 L 30.36 26.4 L 30.36 4.8" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 1.56 4.8 L 1.56 26.4 L 30.36 26.4 L 30.36 4.8" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 1.56 4.8 L 30.36 4.8" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 1.56 4.8 L 30.36 4.8" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.72px"><text x="15.96" y="4.5" _mstHash="90548445" _mstTextHash="2524704">池</text></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 2.76 4.8 L 1.56 4.8 L 1.56 12 L 2.76 12" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 2.76 4.8 L 30.36 4.8 L 30.36 12 L 2.76 12" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 2.76 4.8 L 30.36 4.8 L 30.36 12 L 2.76 12" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 2.76 4.8 L 2.76 12" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 2.76 4.8 L 2.76 12" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.72px" transform="rotate(-90,2.16,8.4)"><text x="2.16" y="8.7" _mstHash="90548705" _mstTextHash="7188831">车道 1</text></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 2.76 12 L 1.56 12 L 1.56 19.2 L 2.76 19.2" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 2.76 12 L 30.36 12 L 30.36 19.2 L 2.76 19.2" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 2.76 12 L 30.36 12 L 30.36 19.2 L 2.76 19.2" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 2.76 12 L 2.76 19.2" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 2.76 12 L 2.76 19.2" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.72px" transform="rotate(-90,2.16,15.6)"><text x="2.16" y="15.9" _mstHash="90548965" _mstTextHash="7188948">车道 2</text></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 2.76 19.2 L 1.56 19.2 L 1.56 26.4 L 2.76 26.4" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 2.76 19.2 L 30.36 19.2 L 30.36 26.4 L 2.76 26.4" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 2.76 19.2 L 30.36 19.2 L 30.36 26.4 L 2.76 26.4" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 2.76 19.2 L 2.76 26.4" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 2.76 19.2 L 2.76 26.4" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.72px" transform="rotate(-90,2.16,22.8)"><text x="2.16" y="23.1" _mstHash="90549225" _mstTextHash="7189065">车道 3</text></g></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.338768115942029,
      y: 0.4202898550724638,
      width: 0.5018115942028986,
      height: 0.15760869565217392,
      id: '30b4cc',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476485c15b861924ca6067',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:06:13.337Z',
    __v: 0,
    path: [
      {
        d: 'M1.23 69.28v885.44h1021.54V69.28zM9.16 363l191.48 0.17V660.3l-191.48-0.16z m199.41 0.17l806.27 0.69V661l-806.27-0.69z m806.27-7.17l-806.27-0.68V77.21h806.27zM200.64 77.21v278.05L9.16 355.1V77.21zM9.16 668.06l191.48 0.16v278.57H9.16z m199.41 278.73V668.23l806.27 0.69v277.87z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '垂直泳道',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M68.55 0.39v1023.22h886.9V0.39z m879 199.74H669l0.16-191.8h278.35z m-584 0l0.16-191.8h297.6l-0.16 191.8z m297.59 7.94l-0.68 807.6H362.77l0.68-807.6zM355.68 8.33l-0.16 191.8h-279V8.33zM76.49 208.07h279l-0.68 807.6H76.49z m591.82 807.6l0.68-807.6h278.52v807.6z" p-id="6244"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 6.95 3.95 L 6.95 2.95 L 24.95 2.95 L 24.95 3.95" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 6.95 3.95 L 6.95 26.95 L 24.95 26.95 L 24.95 3.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 6.95 3.95 L 6.95 26.95 L 24.95 26.95 L 24.95 3.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 6.95 3.95 L 24.95 3.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 6.95 3.95 L 24.95 3.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.6000000000000001px"><text x="15.95" y="3.7" _mstHash="670103005" _mstTextHash="2524704">池</text></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 6.95 4.95 L 6.95 3.95 L 12.95 3.95 L 12.95 4.95" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 6.95 4.95 L 6.95 26.95 L 12.95 26.95 L 12.95 4.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 6.95 4.95 L 6.95 26.95 L 12.95 26.95 L 12.95 4.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 6.95 4.95 L 12.95 4.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 6.95 4.95 L 12.95 4.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.6000000000000001px"><text x="9.95" y="4.7" _mstHash="670103265" _mstTextHash="7188831">车道 1</text></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 12.95 4.95 L 12.95 3.95 L 18.95 3.95 L 18.95 4.95" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 12.95 4.95 L 12.95 26.95 L 18.95 26.95 L 18.95 4.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 12.95 4.95 L 12.95 26.95 L 18.95 26.95 L 18.95 4.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 12.95 4.95 L 18.95 4.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 12.95 4.95 L 18.95 4.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.6000000000000001px"><text x="15.95" y="4.7" _mstHash="670103525" _mstTextHash="7188948">车道 2</text></g></g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 18.95 4.95 L 18.95 3.95 L 24.95 3.95 L 24.95 4.95" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 18.95 4.95 L 18.95 26.95 L 24.95 26.95 L 24.95 4.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 18.95 4.95 L 18.95 26.95 L 24.95 26.95 L 24.95 4.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path><path d="M 18.95 4.95 L 24.95 4.95" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 18.95 4.95 L 24.95 4.95" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="none"></path></g><g style=""><g fill="rgb(0, 0, 0)" font-family="Helvetica" font-weight="bold" text-anchor="middle" font-size="0.6000000000000001px"><text x="21.95" y="4.7" _mstHash="670103785" _mstTextHash="7189065">车道 3</text></g></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.411231884057971,
      y: 0.3641304347826087,
      width: 0.18297101449275363,
      height: 0.4311594202898551,
      id: 'eb2f7b',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634764a1c15b861924ca606b',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:06:41.083Z',
    __v: 0,
    path: [
      {
        d: 'M68.55 0.39v1023.22h886.9V0.39z m879 199.74H669l0.16-191.8h278.35z m-584 0l0.16-191.8h297.6l-0.16 191.8z m297.59 7.94l-0.68 807.6H362.77l0.68-807.6zM355.68 8.33l-0.16 191.8h-279V8.33zM76.49 208.07h279l-0.68 807.6H76.49z m591.82 807.6l0.68-807.6h278.52v807.6z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '文档',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1022.3 168.86H1.7v619.63h2.93l-1.37 1.69c2.53 2.07 5.46 4.61 8.85 7.56 23.12 20.09 66 57.4 123 57.4h0.95c85-0.61 141.23-35.87 195.62-70 19.21-12 39.08-24.51 60.13-35.41 79.78-41.29 245.78-127.26 406.82-90.73 41 9.33 126.34 28.73 216.36 131.09l1.83-1.62h5.48z m-221.81 482c-70.67-16-151-10.44-238.62 16.61-72.68 22.43-133.6 54-174 74.9-21.28 11-41.3 23.58-60.66 35.71-55.85 35-108.61 68.1-191.21 68.69-54.23 0.46-96-35.86-118.38-55.34-2.8-2.43-5.27-4.57-7.52-6.45V177.27h1003.79v599c-89.07-97.16-172.65-116.18-213.4-125.45z" p-id="6383"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><path d="M 1.44 5.28 L 30.24 5.28 L 30.24 21.6 Q 23.04 16.42 15.84 21.6 Q 8.64 26.78 1.44 21.6 L 1.44 8.16 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.22463768115942023,
      y: 0.2934782608695653,
      width: 0.5543478260869565,
      height: 0.23007246376811594,
      id: '7108ff',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634764bbc15b861924ca606f',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:07:07.901Z',
    __v: 0,
    path: [
      {
        d: 'M1022.3 168.86H1.7v619.63h2.93l-1.37 1.69c2.53 2.07 5.46 4.61 8.85 7.56 23.12 20.09 66 57.4 123 57.4h0.95c85-0.61 141.23-35.87 195.62-70 19.21-12 39.08-24.51 60.13-35.41 79.78-41.29 245.78-127.26 406.82-90.73 41 9.33 126.34 28.73 216.36 131.09l1.83-1.62h5.48z m-221.81 482c-70.67-16-151-10.44-238.62 16.61-72.68 22.43-133.6 54-174 74.9-21.28 11-41.3 23.58-60.66 35.71-55.85 35-108.61 68.1-191.21 68.69-54.23 0.46-96-35.86-118.38-55.34-2.8-2.43-5.27-4.57-7.52-6.45V177.27h1003.79v599c-89.07-97.16-172.65-116.18-213.4-125.45z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '延迟',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1024 513.79c-0.64-39.33-10.06-79.38-28-119-14.31-31.65-34-63.11-58.66-93.54-41.86-51.74-84-83-84.43-83.32l-1-0.78H0.17V221H0v585.9l2.49-4.54-2.27 4h851.72l1.08-0.86c115.14-90.68 172.67-188.84 170.98-291.71zM849.18 798.44H7.9V225.05h841.33c6.65 5.08 44.47 34.79 82.08 81.33 37.89 46.88 83.36 121 84.75 207.58 1.62 99.93-54.53 195.63-166.88 284.48z" p-id="6518"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 1.45 7.54 C 1.45 6.74 2.11 6.09 2.93 6.09 L 24.77 6.09 C 28.23 7.65 30.45 11.05 30.45 14.79 C 30.45 18.53 28.23 21.93 24.77 23.49 L 2.93 23.49 C 2.11 23.49 1.45 22.84 1.45 22.04 L 1.45 7.54 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.161231884057971,
      y: 0.35507246376811596,
      width: 0.5851449275362319,
      height: 0.2717391304347826,
      id: 'bd3918',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634764d5c15b861924ca6075',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:07:33.390Z',
    __v: 0,
    path: [
      {
        d: 'M1024 513.79c-0.64-39.33-10.06-79.38-28-119-14.31-31.65-34-63.11-58.66-93.54-41.86-51.74-84-83-84.43-83.32l-1-0.78H0.17V221H0v585.9l2.49-4.54-2.27 4h851.72l1.08-0.86c115.14-90.68 172.67-188.84 170.98-291.71zM849.18 798.44H7.9V225.05h841.33c6.65 5.08 44.47 34.79 82.08 81.33 37.89 46.88 83.36 121 84.75 207.58 1.62 99.93-54.53 195.63-166.88 284.48z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '显示内容',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1017 395c-11-105.23-33.32-173.32-33.54-174l-0.9-2.72h-816.5l-1 0.75c-0.39 0.28-39.71 29-79.29 77.57-23.27 28.58-42.11 58.38-56 88.59C12.32 423 2.67 461.63 1.06 499.88c-4.44 105 50.63 207.55 163.69 304.88l1.12 1h816.8l0.82-2.87a1038.06 1038.06 0 0 0 37.69-222.58A1128.26 1128.26 0 0 0 1017 395z m-40.31 402.8H168.81C58.46 702.43 4.68 602.33 9 500.27c3.55-84.31 47-154.47 82.75-198.48 35.42-43.54 70.58-70.81 76.93-75.59h808.1c4.18 13.58 22.61 77 32.33 169.61 10.05 95.8 12.53 243.07-32.42 401.99z" p-id="6653"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>显示内容</title><path d="M5.59,6.65H29.87s2.83,7.11,0,16.65H5.59S.44,19.82.91,13.76C.91,13.76,1.88,8.52,5.59,6.65Z" fill="#fff"/><path d="M31.18,11.48a28.67,28.67,0,0,0-1-5.23l0-.08H5.6l0,0A14.35,14.35,0,0,0,3.18,8.52,12.62,12.62,0,0,0,1.5,11.19a9.18,9.18,0,0,0-.86,3.44C.5,17.79,2.16,20.88,5.56,23.8l0,0H30.15l0-.08a31.09,31.09,0,0,0,1.13-6.7A33.45,33.45,0,0,0,31.18,11.48ZM30,23.59H5.68C2.36,20.73.75,17.72.88,14.65a10.4,10.4,0,0,1,2.48-6A14.18,14.18,0,0,1,5.68,6.41H30a28,28,0,0,1,1,5.1A32.61,32.61,0,0,1,30,23.59Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.24456521739130435,
      y: 0.34239130434782605,
      width: 0.5851449275362319,
      height: 0.3115942028985507,
      id: '38e4de',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634764e9c15b861924ca607b',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:07:53.392Z',
    __v: 0,
    path: [
      {
        d: 'M1017 395c-11-105.23-33.32-173.32-33.54-174l-0.9-2.72h-816.5l-1 0.75c-0.39 0.28-39.71 29-79.29 77.57-23.27 28.58-42.11 58.38-56 88.59C12.32 423 2.67 461.63 1.06 499.88c-4.44 105 50.63 207.55 163.69 304.88l1.12 1h816.8l0.82-2.87a1038.06 1038.06 0 0 0 37.69-222.58A1128.26 1128.26 0 0 0 1017 395z m-40.31 402.8H168.81C58.46 702.43 4.68 602.33 9 500.27c3.55-84.31 47-154.47 82.75-198.48 35.42-43.54 70.58-70.81 76.93-75.59h808.1c4.18 13.58 22.61 77 32.33 169.61 10.05 95.8 12.53 243.07-32.42 401.99z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '斜角矩形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M820.69 146.63l-1.16-1.13H203.27L0.44 345.05v332.61L203.26 878.5h616.28l204-200.83V345.05z m194.94 527.72L816.29 870.57H206.52L8.37 674.35v-326l198.15-194.92H816.3l199.33 195z" p-id="6788"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>斜角矩形</title><polygon points="25.19 4.49 6.67 4.49 1.01 10.28 1.01 20.07 6.67 25.51 25.19 25.51 30.98 20 30.98 10.35 25.19 4.49" fill="#fff"/><path d="M25.19,4.13l0,0H6.81L.78,10v9.9l6,6H25.15l6.07-6V10ZM31,19.83l-5.94,5.84H6.91L1,19.83v-9.7l5.89-5.8H25.05L31,10.13Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.24456521739130432,
      y: 0.3605072463768116,
      width: 0.519927536231884,
      height: 0.2536231884057971,
      id: '7802c8',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476501c15b861924ca607f',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:08:17.794Z',
    __v: 0,
    path: [
      {
        d: 'M820.69 146.63l-1.16-1.13H203.27L0.44 345.05v332.61L203.26 878.5h616.28l204-200.83V345.05z m194.94 527.72L816.29 870.57H206.52L8.37 674.35v-326l198.15-194.92H816.3l199.33 195z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '循环界限',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M803.85 179.71H219.73l-219 269-0.29 395.58h1022.71l0.41-394.17v-1.42z m211.38 656.65H8.37l0.24-384.84L223.5 187.64h576.59l215.54 263.88z" p-id="6923"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 7.07 6.09 L 24.83 6.09 L 30.45 11.89 L 30.45 22.04 C 30.45 22.84 29.79 23.49 28.97 23.49 L 2.93 23.49 C 2.11 23.49 1.45 22.84 1.45 22.04 L 1.45 11.89 L 7.07 6.09 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.13768115942028988,
      y: 0.36775362318840576,
      width: 0.7427536231884058,
      height: 0.34601449275362317,
      id: 'dd19a0',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476521c15b861924ca6083',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:08:49.092Z',
    __v: 0,
    path: [
      {
        d: 'M803.85 179.71H219.73l-219 269-0.29 395.58h1022.71l0.41-394.17v-1.42z m211.38 656.65H8.37l0.24-384.84L223.5 187.64h576.59l215.54 263.88z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '半圆形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1023.14 736.35c-0.21-1.13-21.71-114.61-95.14-226.52-43.18-65.83-95.62-118.28-155.85-155.92C696.83 306.84 609.11 283 511.43 283s-185.35 23.87-260.55 70.94C190.74 391.55 138.44 444 95.42 509.83 22.27 621.74 1.05 735.23 0.85 736.36L0 741h1024zM9.59 733.11c4.79-22.36 28.61-121.36 92.6-219.17 66.57-101.75 191.61-223.05 409.24-223.05s343 121.3 409.81 223.06c64.22 97.79 88.29 196.78 93.15 219.16z" p-id="7058"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.45 7.54 C 1.45 15.55 7.94 22.04 15.95 22.04 C 23.96 22.04 30.45 15.55 30.45 7.54 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.28079710144927533,
      y: 0.42028985507246386,
      width: 0.45108695652173914,
      height: 0.21014492753623187,
      id: '244485',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476535c15b861924ca6089',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:09:09.478Z',
    __v: 0,
    path: [
      {
        d: 'M1023.14 736.35c-0.21-1.13-21.71-114.61-95.14-226.52-43.18-65.83-95.62-118.28-155.85-155.92C696.83 306.84 609.11 283 511.43 283s-185.35 23.87-260.55 70.94C190.74 391.55 138.44 444 95.42 509.83 22.27 621.74 1.05 735.23 0.85 736.36L0 741h1024zM9.59 733.11c4.79-22.36 28.61-121.36 92.6-219.17 66.57-101.75 191.61-223.05 409.24-223.05s343 121.3 409.81 223.06c64.22 97.79 88.29 196.78 93.15 219.16z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '圆角矩形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M907.51 88.73h-791A116.3 116.3 0 0 0 0.32 204.9v614.2a116.3 116.3 0 0 0 116.17 116.17h791a116.3 116.3 0 0 0 116.19-116.17V204.9A116.3 116.3 0 0 0 907.51 88.73z m108.24 730.37a108.37 108.37 0 0 1-108.24 108.25h-791A108.37 108.37 0 0 1 8.25 819.1V204.9A108.37 108.37 0 0 1 116.49 96.65h791a108.37 108.37 0 0 1 108.26 108.25z" p-id="7193"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><rect x="1.44" y="7.68" width="28.8" height="14.4" rx="2.16" ry="2.16" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all" _mstVisible="8"></rect></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.1467391304347826,
      y: 0.30978260869565216,
      width: 0.697463768115942,
      height: 0.37681159420289856,
      id: '27c546',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476549c15b861924ca608f',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:09:29.247Z',
    __v: 0,
    path: [
      {
        d: 'M907.51 88.73h-791A116.3 116.3 0 0 0 0.32 204.9v614.2a116.3 116.3 0 0 0 116.17 116.17h791a116.3 116.3 0 0 0 116.19-116.17V204.9A116.3 116.3 0 0 0 907.51 88.73z m108.24 730.37a108.37 108.37 0 0 1-108.24 108.25h-791A108.37 108.37 0 0 1 8.25 819.1V204.9A108.37 108.37 0 0 1 116.49 96.65h791a108.37 108.37 0 0 1 108.26 108.25z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: ' 穿孔卡片',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M192.06 238.72L0 430.68l1.55 354.6H1024V238.72z m824 538.64H9.44L7.94 434l187.4-187.31h820.74z" p-id="7330"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 7.25 6.09 L 30.45 6.09 L 30.45 23.49 L 1.45 23.49 L 1.45 11.89 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.2463768115942029,
      y: 0.3659420289855073,
      width: 0.5670289855072463,
      height: 0.2608695652173913,
      id: '1d3c18',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347655fc15b861924ca6093',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:09:51.945Z',
    __v: 0,
    path: [
      {
        d: 'M192.06 238.72L0 430.68l1.55 354.6H1024V238.72z m824 538.64H9.44L7.94 434l187.4-187.31h820.74z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '子程序',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M0.75 218.57v586.86h1022.5V218.57z m815.56 7.92v571h-608v-571z m-807.64 0h191.69v571H8.67z m1006.66 571h-191.1v-571h191.1z" p-id="7465"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><rect x="1.44" y="7.68" width="28.8" height="14.4" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all" _mstVisible="8"></rect><path d="M 4.32 7.68 L 4.32 22.08 M 27.36 7.68 L 27.36 22.08" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden" _mstVisible="8"></path><path d="M 4.32 7.68 L 4.32 22.08 M 27.36 7.68 L 27.36 22.08" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.3007246376811594,
      y: 0.3623188405797102,
      width: 0.375,
      height: 0.26268115942028986,
      id: '8476f9',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476572c15b861924ca6097',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:10:10.627Z',
    __v: 0,
    path: [
      {
        d: 'M0.75 218.57v586.86h1022.5V218.57z m815.56 7.92v571h-608v-571z m-807.64 0h191.69v571H8.67z m1006.66 571h-191.1v-571h191.1z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '直接数据',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M970.14 253.45c-35.07-70-82-108.55-132.21-108.55a96.87 96.87 0 0 0-12.51 0.83h-712l-1.19 1.57c-0.65 0.85-65.37 87.12-96 219.45-18 77.75-20.9 156-8.65 232.57C22.88 695 62 788.29 123.91 876.59l1.19 1.69h700.42a97 97 0 0 0 12.41 0.82c50.18 0 97.14-38.55 132.21-108.55 34.64-69.13 53.72-160.95 53.72-258.55s-19.08-189.42-53.72-258.55z m-840.9 616.89C-8 673.45-3.85 489 23.88 368.87c27.94-121 84.71-203 93.51-215.2h679.68c-34.48 15.07-66 49.21-91.35 99.78C671.08 322.58 652 414.4 652 512s19.08 189.42 53.72 258.55c25.34 50.58 56.89 84.73 91.38 99.79z m716.71 0.43v-0.43h-19.88C733.44 858 660 702 660 512s73.44-345.88 166-358.33h8.18v-0.73c1.26-0.05 2.51-0.1 3.77-0.1 98.14 0 178 161.12 178 359.16-0.04 192.61-75.57 350.28-169.95 358.77z" p-id="7602"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 4.11 6.09 L 27.79 6.09 C 29.26 6.09 30.45 9.99 30.45 14.79 C 30.45 19.59 29.26 23.49 27.79 23.49 L 4.11 23.49 C 2.64 23.49 1.45 19.59 1.45 14.79 C 1.45 9.99 2.64 6.09 4.11 6.09 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 27.79 6.09 C 26.32 6.09 25.12 9.99 25.12 14.79 C 25.12 19.59 26.32 23.49 27.79 23.49" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 27.79 6.09 C 26.32 6.09 25.12 9.99 25.12 14.79 C 25.12 19.59 26.32 23.49 27.79 23.49" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.18840579710144928,
      y: 0.3695652173913043,
      width: 0.32065217391304346,
      height: 0.2536231884057971,
      id: '0fd063',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476589c15b861924ca609b',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:10:33.149Z',
    __v: 0,
    path: [
      {
        d: 'M970.14 253.45c-35.07-70-82-108.55-132.21-108.55a96.87 96.87 0 0 0-12.51 0.83h-712l-1.19 1.57c-0.65 0.85-65.37 87.12-96 219.45-18 77.75-20.9 156-8.65 232.57C22.88 695 62 788.29 123.91 876.59l1.19 1.69h700.42a97 97 0 0 0 12.41 0.82c50.18 0 97.14-38.55 132.21-108.55 34.64-69.13 53.72-160.95 53.72-258.55s-19.08-189.42-53.72-258.55z m-840.9 616.89C-8 673.45-3.85 489 23.88 368.87c27.94-121 84.71-203 93.51-215.2h679.68c-34.48 15.07-66 49.21-91.35 99.78C671.08 322.58 652 414.4 652 512s19.08 189.42 53.72 258.55c25.34 50.58 56.89 84.73 91.38 99.79z m716.71 0.43v-0.43h-19.88C733.44 858 660 702 660 512s73.44-345.88 166-358.33h8.18v-0.73c1.26-0.05 2.51-0.1 3.77-0.1 98.14 0 178 161.12 178 359.16-0.04 192.61-75.57 350.28-169.95 358.77z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '准备',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M771.34 114.5l-1-1.6H257L0 512l257 399.11h513.31l255.79-397.22 1.22-1.89z m-4.85 789.61H260.82L8.32 512l252.5-392.1h505.67L1019 512z" p-id="7737"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><path d="M 6.24 5.28 L 25.44 5.28 L 30.24 14.88 L 25.44 24.48 L 6.24 24.48 L 1.44 14.88 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.21376811594202905,
      y: 0.2898550724637681,
      width: 0.5652173913043478,
      height: 0.38405797101449274,
      id: 'd8db04',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634765a2c15b861924ca609f',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:10:58.502Z',
    __v: 0,
    path: [
      {
        d: 'M771.34 114.5l-1-1.6H257L0 512l257 399.11h513.31l255.79-397.22 1.22-1.89z m-4.85 789.61H260.82L8.32 512l252.5-392.1h505.67L1019 512z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '并行',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1.03 259.81H1023.6v8H1.03zM0.39 756.2h1022.58v8H0.39zM268.83 475.64h72.71v72.71h-72.71zM475.65 475.64h72.71v72.71h-72.71zM682.46 475.64h72.71v72.71h-72.71z" p-id="7872"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><rect x="1.24" y="8.68" width="29.45" height="12.4" fill="none" stroke="white" pointer-events="stroke" visibility="hidden" stroke-width="9"></rect><rect x="1.24" y="8.68" width="29.45" height="12.4" fill="none" stroke="none" pointer-events="all"></rect><path d="M 15.96 13.33 L 17.53 14.88 L 15.96 16.43 L 14.4 14.88 L 15.96 13.33 Z M 9.7 13.33 L 11.27 14.88 L 9.7 16.43 L 8.13 14.88 L 9.7 13.33 Z M 22.23 13.33 L 23.8 14.88 L 22.23 16.43 L 20.66 14.88 L 22.23 13.33 Z" fill="#ffff00" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 1.24 8.68 L 30.69 8.68" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 1.24 8.68 L 30.69 8.68" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 1.24 21.08 L 30.69 21.08" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 1.24 21.08 L 30.69 21.08" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: null,
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634765bac15b861924ca60a3',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:11:22.863Z',
    __v: 0,
    path: [
      {
        d: 'M1.03 259.81H1023.6v8H1.03zM0.39 756.2h1022.58v8H0.39zM268.83 475.64h72.71v72.71h-72.71zM475.65 475.64h72.71v72.71h-72.71zM682.46 475.64h72.71v72.71h-72.71z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '垂直泳道',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M249 0l-0.28 1023.88L776 1024 776.29 0.11z m258.69 1015.53H257.1l0.22-806.33 250.37-0.58z m259.91 0.06l-251.49-0.06v-807l251.72-0.53z m0.23-816l-510.5 1.18 0.05-192.33 510.5 0.12z" p-id="8011"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>垂直泳道</title><rect x="8.88" y="0.95" width="13.97" height="28.33" fill="#fff"/><path d="M8.65.72V29.28H23.35V.72Zm7.22,28.33h-7V6.55h7Zm7.25,0h-7V6.53h7Zm0-22.77-14.24,0V1H23.12Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.3405797101449274,
      y: 0.038043478260869554,
      width: 0.3333333333333333,
      height: 0.12681159420289856,
      id: '692d77',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634765ccc15b861924ca60a7',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:11:40.579Z',
    __v: 0,
    path: [
      {
        d: 'M249 0l-0.28 1023.88L776 1024 776.29 0.11z m258.69 1015.53H257.1l0.22-806.33 250.37-0.58z m259.91 0.06l-251.49-0.06v-807l251.72-0.53z m0.23-816l-510.5 1.18 0.05-192.33 510.5 0.12z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '水平泳道',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1.45 218.36v587.28h1021.1V218.36z m1013.17 274.56l-805.92-0.85V226.29h805.92zM9.38 226.29h191.4v571.42H9.38zM208.7 797.71V500l805.92 0.85v296.86z" p-id="8830"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>水平泳道</title><rect x="0.68" y="6.19" width="30.4" height="17.38" fill="#fff"/><path d="M.68,6.19V23.81H31.32V6.19Zm30.4,8.24L6.9,14.4v-8H31.08ZM.92,6.43H6.66V23.57H.92Zm6,17.14V14.64l24.18,0v8.9Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.032608695652173905,
      y: 0.3242753623188405,
      width: 0.14492753623188406,
      height: 0.3786231884057971,
      id: '17ca6b',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634765f4c15b861924ca60b3',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:12:20.987Z',
    __v: 0,
    path: [
      {
        d: 'M1.45 218.36v587.28h1021.1V218.36z m1013.17 274.56l-805.92-0.85V226.29h805.92zM9.38 226.29h191.4v571.42H9.38zM208.7 797.71V500l805.92 0.85v296.86z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '开始结束',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M903.71 362.64H120.3C54 362.64 0 429.64 0 512s54 149.36 120.3 149.36h783.41c66.29 0 120.29-67 120.29-149.36s-54-149.36-120.29-149.36z m0 290.77H120.3C58.35 653.41 8 590 8 512s50.35-141.41 112.3-141.41h783.41c61.95 0 112.34 63.44 112.34 141.41s-50.39 141.41-112.34 141.41z" p-id="9647"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 25.16 9.25 C 28.23 9.25 30.71 11.73 30.71 14.8 C 30.71 16.27 30.13 17.68 29.08 18.72 C 28.04 19.77 26.63 20.35 25.16 20.35 L 6.66 20.35 C 3.59 20.35 1.11 17.87 1.11 14.8 C 1.11 11.73 3.59 9.25 6.66 9.25 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.19384057971014496,
      y: 0.42753623188405804,
      width: 0.6068840579710145,
      height: 0.13768115942028986,
      id: '3a3344',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347660fc15b861924ca60b7',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:12:47.792Z',
    __v: 0,
    path: [
      {
        d: 'M903.71 362.64H120.3C54 362.64 0 429.64 0 512s54 149.36 120.3 149.36h783.41c66.29 0 120.29-67 120.29-149.36s-54-149.36-120.29-149.36z m0 290.77H120.3C58.35 653.41 8 590 8 512s50.35-141.41 112.3-141.41h783.41c61.95 0 112.34 63.44 112.34 141.41s-50.39 141.41-112.34 141.41z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '控制传递',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1024 508.25H691.83l-285-165.68v165.68H0v8h406.85v165.18L691 516.25h333zM414.85 667.53V356.47L682.36 512z" p-id="9782"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.45 14.79 L 7.25 14.79 M 24.65 14.79 L 30.45 14.79" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 1.45 14.79 L 7.25 14.79 M 24.65 14.79 L 30.45 14.79" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 7.25 6.09 L 24.65 14.79 L 7.25 23.49 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.4456521739130435,
      y: 0.46739130434782605,
      width: 0.1213768115942029,
      height: 0.07608695652173914,
      id: 'dab47b',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347662ac15b861924ca60bb',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:13:14.258Z',
    __v: 0,
    path: [
      {
        d: 'M1024 508.25H691.83l-285-165.68v165.68H0v8h406.85v165.18L691 516.25h333zM414.85 667.53V356.47L682.36 512z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '文件库',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M988.54 229.45v-40.6h-29.86v-38.58H0.5V732h2.75L2 733.6c2.41 1.95 5.37 4.55 8.8 7.55 5.33 4.68 12 10.5 19 16l0.63-0.8v14.24h2.73l-1.27 1.57c2.38 1.93 5.13 4.32 8.31 7.09 6.75 5.86 15.14 13.16 25.08 20.48l0.1-0.14v11.61H68l-1.26 1.55c2.39 1.93 5.13 4.32 8.32 7.09 21.7 18.87 62 53.89 115.48 53.89h0.9c79.78-0.57 132.58-33.68 183.65-65.69 18-11.31 36.69-23 56.45-33.24 74.9-38.79 230.74-119.5 381.94-85.19 38.5 8.75 118.61 27 203.12 123.06l1.68-1.47h5.19V229.45z m-958.18-40.6v558.68c-5.2-4.25-10-8.48-14.4-12.31-2.85-2.5-5.36-4.7-7.56-6.54V158.16h942.39v30.69z m35 40.6v560.46c-7.72-6-14.44-11.78-20-16.62-2.62-2.28-4.94-4.29-7.06-6V196.74h942.4v32.71z m950.24 570.28C932 708.47 853.51 690.61 815.26 681.91c-66.36-15.06-141.74-9.81-224 15.6-68.26 21.06-125.47 50.68-163.39 70.31-20 10.35-38.77 22.14-56.95 33.53-52.43 32.88-102 63.93-179.51 64.49h-0.83c-50.53 0-89.39-33.77-110.31-52-2.63-2.28-5-4.29-7.06-6V237.35h942.39z" p-id="9919"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 4.62 6.59 C 4.62 5.69 5.36 4.95 6.27 4.95 L 28.71 4.95 C 29.15 4.95 29.57 5.12 29.88 5.43 C 30.19 5.74 30.36 6.16 30.36 6.59 L 30.36 19.73 C 26.25 18 21.6 18 17.49 19.73 C 13.38 21.47 8.73 21.47 4.62 19.73 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 2.97 8.23 C 2.97 7.33 3.71 6.59 4.62 6.59 L 27.06 6.59 C 27.97 6.59 28.71 7.33 28.71 8.23 L 28.71 21.37 C 24.6 19.64 19.95 19.64 15.84 21.37 C 11.73 23.11 7.08 23.11 2.97 21.37 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 1.32 9.88 C 1.32 8.97 2.06 8.23 2.97 8.23 L 25.41 8.23 C 26.32 8.23 27.06 8.97 27.06 9.88 L 27.06 23.02 C 22.95 21.28 18.3 21.28 14.19 23.02 C 10.08 24.75 5.43 24.75 1.32 23.02 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.26449275362318836,
      y: 0.3351449275362318,
      width: 0.5688405797101449,
      height: 0.21014492753623187,
      id: '1b3ba2',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347663dc15b861924ca60bf',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:13:33.089Z',
    __v: 0,
    path: [
      {
        d: 'M988.54 229.45v-40.6h-29.86v-38.58H0.5V732h2.75L2 733.6c2.41 1.95 5.37 4.55 8.8 7.55 5.33 4.68 12 10.5 19 16l0.63-0.8v14.24h2.73l-1.27 1.57c2.38 1.93 5.13 4.32 8.31 7.09 6.75 5.86 15.14 13.16 25.08 20.48l0.1-0.14v11.61H68l-1.26 1.55c2.39 1.93 5.13 4.32 8.32 7.09 21.7 18.87 62 53.89 115.48 53.89h0.9c79.78-0.57 132.58-33.68 183.65-65.69 18-11.31 36.69-23 56.45-33.24 74.9-38.79 230.74-119.5 381.94-85.19 38.5 8.75 118.61 27 203.12 123.06l1.68-1.47h5.19V229.45z m-958.18-40.6v558.68c-5.2-4.25-10-8.48-14.4-12.31-2.85-2.5-5.36-4.7-7.56-6.54V158.16h942.39v30.69z m35 40.6v560.46c-7.72-6-14.44-11.78-20-16.62-2.62-2.28-4.94-4.29-7.06-6V196.74h942.4v32.71z m950.24 570.28C932 708.47 853.51 690.61 815.26 681.91c-66.36-15.06-141.74-9.81-224 15.6-68.26 21.06-125.47 50.68-163.39 70.31-20 10.35-38.77 22.14-56.95 33.53-52.43 32.88-102 63.93-179.51 64.49h-0.83c-50.53 0-89.39-33.77-110.31-52-2.63-2.28-5-4.29-7.06-6V237.35h942.39z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '矩形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M0.16 217.9v588.2h1023.68V217.9z m1015.75 580.26H8.09V225.84h1007.82z" p-id="10058"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><rect x="1.44" y="7.68" width="28.8" height="14.4" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all" _mstVisible="8"></rect></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.25362318840579706,
      y: 0.36956521739130443,
      width: 0.483695652173913,
      height: 0.2463768115942029,
      id: 'b29614',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347665bc15b861924ca60c3',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:14:03.069Z',
    __v: 0,
    path: [
      {
        d: 'M0.16 217.9v588.2h1023.68V217.9z m1015.75 580.26H8.09V225.84h1007.82z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '存储数据',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1017.49 794.62C917 649.77 922.3 503.92 944.43 407.07c24-105.18 72.55-177 73-177.71l4.22-6.16h-889.6l-1.11 1c-1.2 1-29.83 26-60.14 70.57-28 41.16-62.48 107.36-67.85 189-7 106.46 35.94 212.7 127.63 315.77l1.17 1.32h890z m-882.2-1.7C45.89 691.93 4 588.12 10.81 484.33c5.22-79.79 39-144.61 66.34-184.94 26.52-39.05 52.36-63.32 57.87-68.31h872c-12.23 19.71-49.86 85.11-70.2 174-14.34 62.63-17.45 124.54-9.25 184 9.94 72 36.59 140.56 79.23 203.88z" p-id="10332"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><path d="M 7.25 3.19 L 30.45 3.19 Q 18.85 14.79 30.45 26.39 L 7.25 26.39 Q -4.35 14.79 7.25 3.19 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.24999999999999997,
      y: 0.338768115942029,
      width: 0.48731884057971014,
      height: 0.29891304347826086,
      id: '1c7e59',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476671c15b861924ca60c7',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:14:25.863Z',
    __v: 0,
    path: [
      {
        d: 'M1017.49 794.62C917 649.77 922.3 503.92 944.43 407.07c24-105.18 72.55-177 73-177.71l4.22-6.16h-889.6l-1.11 1c-1.2 1-29.83 26-60.14 70.57-28 41.16-62.48 107.36-67.85 189-7 106.46 35.94 212.7 127.63 315.77l1.17 1.32h890z m-882.2-1.7C45.89 691.93 4 588.12 10.81 484.33c5.22-79.79 39-144.61 66.34-184.94 26.52-39.05 52.36-63.32 57.87-68.31h872c-12.23 19.71-49.86 85.11-70.2 174-14.34 62.63-17.45 124.54-9.25 184 9.94 72 36.59 140.56 79.23 203.88z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '预定义程序',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M0 218.12v587.76h1024V218.12z m104.22 279.6L11.47 226.08h186z m95.68-254.11V777.9L108.42 510zM100 510L8 778V240.45z m4.2 12.29l94.12 275.63H9.55z m103.66-296.21h608.88v571.84H207.86zM1016 797.92H824.7V226.08H1016z" p-id="10467"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>预定义程序</title><rect x="0.61" y="6.41" width="30.53" height="17.18" fill="#fff"/><path d="M.61,6.17V23.83H31.39V6.17Zm3.14,8.4L1,6.41H6.55ZM6.55,10V20.45a.39.39,0,0,1-.76.14L3.87,14.94l1.91-5C5.89,9.59,6.54,9.7,6.55,10ZM3.62,14.94l-2,5.83a.37.37,0,0,1-.72-.13L1.08,10.1A.33.33,0,0,1,1.71,10Zm.13.37,2.82,8.28H.9Zm3.11-8.9h18.3V23.59H6.86ZM31.15,23.59H25.4V6.41h5.75Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.29347826086956524,
      y: 0.33695652173913043,
      width: 0.4221014492753623,
      height: 0.302536231884058,
      id: 'c8f438',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476685c15b861924ca60cb',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:14:45.201Z',
    __v: 0,
    path: [
      {
        d: 'M0 218.12v587.76h1024V218.12z m104.22 279.6L11.47 226.08h186z m95.68-254.11V777.9L108.42 510zM100 510L8 778V240.45z m4.2 12.29l94.12 275.63H9.55z m103.66-296.21h608.88v571.84H207.86zM1016 797.92H824.7V226.08H1016z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '椭圆',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M981 397.31c-25.79-34.81-62.65-66-109.56-92.82-96.08-54.84-223.73-85-359.45-85s-263.37 30.2-359.45 85c-46.91 26.78-83.77 58-109.56 92.82C16.11 433.59 2.48 472.17 2.48 512S16.11 590.41 43 626.69c25.79 34.81 62.65 66 109.56 92.82 96.08 54.84 223.73 85 359.45 85s263.37-30.2 359.45-85c46.91-26.78 83.77-58 109.56-92.82 26.88-36.28 40.51-74.86 40.51-114.69s-13.64-78.41-40.53-114.69zM512 796.65C235.41 796.65 10.39 669 10.39 512S235.41 227.35 512 227.35 1013.61 355 1013.61 512 788.59 796.65 512 796.65z" p-id="10606"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><ellipse cx="15.84" cy="14.88" rx="14.399999999999999" ry="9.6" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all" _mstVisible="8"></ellipse></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.23731884057971012,
      y: 0.37681159420289856,
      width: 0.5271739130434783,
      height: 0.25181159420289856,
      id: 'fde321',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476698c15b861924ca60cf',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:15:04.443Z',
    __v: 0,
    path: [
      {
        d: 'M981 397.31c-25.79-34.81-62.65-66-109.56-92.82-96.08-54.84-223.73-85-359.45-85s-263.37 30.2-359.45 85c-46.91 26.78-83.77 58-109.56 92.82C16.11 433.59 2.48 472.17 2.48 512S16.11 590.41 43 626.69c25.79 34.81 62.65 66 109.56 92.82 96.08 54.84 223.73 85 359.45 85s263.37-30.2 359.45-85c46.91-26.78 83.77-58 109.56-92.82 26.88-36.28 40.51-74.86 40.51-114.69s-13.64-78.41-40.53-114.69zM512 796.65C235.41 796.65 10.39 669 10.39 512S235.41 227.35 512 227.35 1013.61 355 1013.61 512 788.59 796.65 512 796.65z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '跨页引用',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M36.6 1.18v727.41L508 1021.48l2.17 1.34L987.4 708.41V1.18z m942.85 702.94L510 1013.38 44.55 724.17V9.13h934.9z" p-id="10743"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 2.25 1.35 L 29.25 1.35 L 29.25 14.85 L 15.75 28.35 L 2.25 14.85 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.2481884057971015,
      y: 0.22282608695652176,
      width: 0.5289855072463768,
      height: 0.39311594202898553,
      id: '9f0fa5',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634766abc15b861924ca60d3',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:15:23.877Z',
    __v: 0,
    path: [
      {
        d: 'M36.6 1.18v727.41L508 1021.48l2.17 1.34L987.4 708.41V1.18z m942.85 702.94L510 1013.38 44.55 724.17V9.13h934.9z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '内部存储',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1.48 218.38v587.24h1021V218.38zM1014.6 384.07H194.69V226.31h819.91zM186.76 226.31v157.76H9.4V226.31zM9.4 392h177.36v405.7H9.4z m185.29 405.7V392h819.91v405.7z" p-id="10880"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><rect x="2.38" y="1.36" width="27.2" height="27.2" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all" _mstVisible="8"></rect><path d="M 2.38 8.16 L 29.58 8.16" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden" _mstVisible="8"></path><path d="M 2.38 8.16 L 29.58 8.16" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path><path d="M 9.18 1.36 L 9.18 28.56" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden" _mstVisible="8"></path><path d="M 9.18 1.36 L 9.18 28.56" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.3351449275362318,
      y: 0.45652173913043476,
      width: 0.5289855072463768,
      height: 0.2554347826086957,
      id: '8d421b',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634766c1c15b861924ca60dd',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:15:45.017Z',
    __v: 0,
    path: [
      {
        d: 'M1.48 218.38v587.24h1021V218.38zM1014.6 384.07H194.69V226.31h819.91zM186.76 226.31v157.76H9.4V226.31zM9.4 392h177.36v405.7H9.4z m185.29 405.7V392h819.91v405.7z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '六边形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M768.86 71.07l-1.14-2H256.3L0.57 512l254.58 440.93 1.15 2h511.42L1022.29 514l1.14-2zM763.14 947H260.87L9.71 512 260.87 77h502.27l251.15 435z" p-id="11017"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>六边形</title><polygon points="8.35 2.19 23.23 2.19 30.73 15.13 23.23 27.98 8.35 27.98 1.05 15.13 8.35 2.19" fill="#fff"/><path d="M23.67,1.84l0-.06H8.37L.73,15l7.6,13.16,0,.06H23.63l7.6-13.16,0-.06ZM23.5,28H8.5L1,15,8.5,2h15L31,15Z" fill="#040000" stroke="#040000" stroke-miterlimit="10" stroke-width="1.2"/></svg>',
    text: {
      x: 0.23550724637681145,
      y: 0.3007246376811594,
      width: 0.5471014492753623,
      height: 0.3605072463768116,
      id: 'cf235f',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634766d4c15b861924ca60e9',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:16:04.076Z',
    __v: 0,
    path: [
      {
        d: 'M768.86 71.07l-1.14-2H256.3L0.57 512l254.58 440.93 1.15 2h511.42L1022.29 514l1.14-2zM763.14 947H260.87L9.71 512 260.87 77h502.27l251.15 435z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '手动操作',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M0 218l159.65 584 0.8 2.91h701.87L1022.62 223l1.38-5z m856.29 579H166.5L10.37 225.93H1013.6z" p-id="11832"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.45 23.49 L 8.12 6.09 L 23.78 6.09 L 30.45 23.49 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" transform="translate(0,14.79)scale(1,-1)translate(0,-14.79)" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.25,
      y: 0.37681159420289856,
      width: 0.5217391304347826,
      height: 0.23550724637681159,
      id: '0be213',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634766e9c15b861924ca60ed',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:16:25.628Z',
    __v: 0,
    path: [
      {
        d: 'M0 218l159.65 584 0.8 2.91h701.87L1022.62 223l1.38-5z m856.29 579H166.5L10.37 225.93H1013.6z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '批注',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M221.37 508.01H79.53v7.93h141.84v507.5h212.58v-7.93H229.3V8.49h204.65V0.56H221.37v507.45zM653.98 339.21h290.49v7.93H653.98zM654.89 678.02h289.58v7.93H654.89z" p-id="11967"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><rect x="9.18" y="1.35" width="13.5" height="27" fill="none" stroke="white" pointer-events="stroke" visibility="hidden" stroke-width="9"></rect><rect x="9.18" y="1.35" width="13.5" height="27" fill="none" stroke="none" pointer-events="all"></rect><path d="M 22.68 1.35 L 15.93 1.35 L 15.93 28.35 L 22.68 28.35" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 22.68 1.35 L 15.93 1.35 L 15.93 28.35 L 22.68 28.35" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><path d="M 9.18 14.85 L 15.93 14.85" fill="none" stroke="white" stroke-width="9.3" stroke-miterlimit="10" pointer-events="stroke" visibility="hidden"></path><path d="M 9.18 14.85 L 15.93 14.85" fill="none" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: null,
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '634766fec15b861924ca60f1',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:16:46.971Z',
    __v: 0,
    path: [
      {
        d: 'M221.37 508.01H79.53v7.93h141.84v507.5h212.58v-7.93H229.3V8.49h204.65V0.56H221.37v507.45zM653.98 339.21h290.49v7.93H653.98zM654.89 678.02h289.58v7.93H654.89z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '手动输入',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M3.11 443l-3.11 0.7v363.2l1020-0.72h4V217.1z m1013 355.23L7.94 799V450.07L1016.06 227z" p-id="12102"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 15.95 23.49 L 3.04 23.49 Q 1.45 23.49 1.45 21.89 L 1.45 15.22 Q 1.45 13.63 2.99 13.23 L 28.91 6.49 Q 30.45 6.09 30.45 7.68 L 30.45 21.89 Q 30.45 23.49 28.85 23.49 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.18115942028985504,
      y: 0.45108695652173925,
      width: 0.6086956521739131,
      height: 0.24456521739130435,
      id: 'de4bdf',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476712c15b861924ca60f5',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:17:06.788Z',
    __v: 0,
    path: [
      {
        d: 'M3.11 443l-3.11 0.7v363.2l1020-0.72h4V217.1z m1013 355.23L7.94 799V450.07L1016.06 227z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '平行四边形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M127.38 213.27L1.25 810.73h895.36l126.14-597.46z m762.83 589.56H11l122.8-581.66H1013z" p-id="12239"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><path d="M 1.44 22.08 L 6.24 7.68 L 30.24 7.68 L 25.44 22.08 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all" _mstVisible="8"></path></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.2391304347826087,
      y: 0.378623188405797,
      width: 0.5362318840579711,
      height: 0.23007246376811594,
      id: '18458e',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476727c15b861924ca60f9',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:17:27.983Z',
    __v: 0,
    path: [
      {
        d: 'M127.38 213.27L1.25 810.73h895.36l126.14-597.46z m762.83 589.56H11l122.8-581.66H1013z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '穿孔纸带',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1021.47 233.65c-40.37-32.79-89.36-56.36-145.6-70.06-51-12.42-108.06-16.81-169.72-13.05-107.23 6.53-227.42 38-338.42 88.49-102.29 46.57-194.86 42.56-254.5 31C48.5 257.47 7.45 233.55 7 233.31l-6-3.52v588.68l1.62 1.19c1.74 1.27 43.18 31.22 110 46.52a337.4 337.4 0 0 0 75.38 8.58 330.46 330.46 0 0 0 42.86-2.76c49-6.41 97.21-24 143.34-52.13 99-60.48 222.29-96.75 338.32-99.52 124.22-3 232.1 32.21 303.75 99l6.67 6.22V234.84zM1015 807.51c-36.68-32.33-81.45-56.89-133.22-73.06-51.48-16.09-108.51-23.45-169.45-22.06-58.72 1.4-118.49 10.94-177.64 28.34s-114.54 41.74-164.63 72.35C268 875.46 174.87 872.22 114.75 858.52 56.67 845.29 17.28 820 9 814.39v-571c13.71 7.13 50.12 24.15 102.4 34.33a423.46 423.46 0 0 0 117 6.36C277 280 325 267.22 371 246.25c110.13-50.14 229.33-81.32 335.62-87.8 126.76-7.73 233.33 20 308.37 80.17z" p-id="12374"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g style="visibility: visible;" transform="translate(0.5,0.5)"><path d="M 1.45 7.3 Q 8.7 10.52 15.95 7.3 Q 23.2 4.08 30.45 7.3 L 30.45 22.57 Q 23.2 19.35 15.95 22.57 Q 8.7 25.79 1.45 22.57 L 1.45 7.3 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.23188405797101447,
      y: 0.3478260869565218,
      width: 0.5561594202898551,
      height: 0.2608695652173913,
      id: 'e3344d',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347673ec15b861924ca60fd',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:17:50.969Z',
    __v: 0,
    path: [
      {
        d: 'M1021.47 233.65c-40.37-32.79-89.36-56.36-145.6-70.06-51-12.42-108.06-16.81-169.72-13.05-107.23 6.53-227.42 38-338.42 88.49-102.29 46.57-194.86 42.56-254.5 31C48.5 257.47 7.45 233.55 7 233.31l-6-3.52v588.68l1.62 1.19c1.74 1.27 43.18 31.22 110 46.52a337.4 337.4 0 0 0 75.38 8.58 330.46 330.46 0 0 0 42.86-2.76c49-6.41 97.21-24 143.34-52.13 99-60.48 222.29-96.75 338.32-99.52 124.22-3 232.1 32.21 303.75 99l6.67 6.22V234.84zM1015 807.51c-36.68-32.33-81.45-56.89-133.22-73.06-51.48-16.09-108.51-23.45-169.45-22.06-58.72 1.4-118.49 10.94-177.64 28.34s-114.54 41.74-164.63 72.35C268 875.46 174.87 872.22 114.75 858.52 56.67 845.29 17.28 820 9 814.39v-571c13.71 7.13 50.12 24.15 102.4 34.33a423.46 423.46 0 0 0 117 6.36C277 280 325 267.22 371 246.25c110.13-50.14 229.33-81.32 335.62-87.8 126.76-7.73 233.33 20 308.37 80.17z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '菱形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M510.39 159.82L1.69 512.91l507.62 349.73 2.23 1.54 510.77-353.55z m1.14 694.81l-496-341.75 494.89-343.52 498.05 341.3z" p-id="12511"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;"><g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 15.68 2.45 L 30.38 14.7 L 15.68 26.95 L 0.98 14.7 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g></svg>',
    text: {
      x: 0.2590579710144925,
      y: 0.36413043478260865,
      width: 0.45652173913043476,
      height: 0.26268115942028986,
      id: '9d46f6',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476758c15b861924ca610b',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:18:16.626Z',
    __v: 0,
    path: [
      {
        d: 'M510.39 159.82L1.69 512.91l507.62 349.73 2.23 1.54 510.77-353.55z m1.14 694.81l-496-341.75 494.89-343.52 498.05 341.3z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '数据库',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M1022.26 307.91c0-32.87-82.43-54.09-151.58-66.1C774.84 225.16 647.46 216 512 216s-262.84 9.17-358.68 25.82C84.17 253.82 1.74 275 1.74 307.91a20.06 20.06 0 0 0 0.17 2.46v399l2.18 1.1c1.09 0.55 110.84 55.14 290 82.25A1369.1 1369.1 0 0 0 498.87 808q58.32 0 117-4.87c135.35-11.26 271.17-42.2 403.68-92l2.58-1V310.38a20.36 20.36 0 0 0 0.13-2.47z m-867.58-58.29c95.41-16.57 222.32-25.7 357.32-25.7s261.91 9.13 357.32 25.7c90.8 15.78 145 37.57 145 58.29 0 0.43 0 0.86-0.08 1.29h-0.09v0.71c-3.37 20.12-57 41-144.84 56.28C773.91 382.77 647 391.9 512 391.9s-261.91-9.13-357.32-25.71C66.8 350.93 13.2 330 9.84 309.91v-1.29H9.7v-0.71c-0.03-20.72 54.18-42.51 144.98-58.29z m141 535.32c-164.25-24.8-269.62-72.76-285.84-80.48V325.22c22.42 23.21 87.33 39 143.48 48.79 95.84 16.65 223.22 25.82 358.68 25.82s262.84-9.17 358.68-25.83c56.15-9.76 121.06-25.58 143.48-48.79v379.5c-297.29 111.07-554.72 104.97-718.51 80.23z" p-id="12650"/>',
    icon: '<svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><title>数据库</title><path d="M1.26,8.5S4,5.8,15.15,6.47c0,0,10.16-.79,15.84,2l.07,12.13s-7.43,3.86-14.9,2.82c0,0-11.15,1.2-15-2.8Z" fill="#fff"/><path d="M31.3,8.88c0-1-2.47-1.62-4.55-2A65.9,65.9,0,0,0,16,6.12,65.9,65.9,0,0,0,5.25,6.9c-2.08.36-4.55,1-4.55,2A.15.15,0,0,0,.71,9v12l.06,0a31.81,31.81,0,0,0,8.7,2.47,42,42,0,0,0,6.14.46c1.16,0,2.33-.05,3.5-.15A45.27,45.27,0,0,0,31.22,21l.08,0V8.88Zm-26-1.75A66.62,66.62,0,0,1,16,6.36a66.62,66.62,0,0,1,10.71.77c2.73.48,4.35,1.13,4.35,1.75v0h0v0c-.1.6-1.71,1.23-4.35,1.69A65.49,65.49,0,0,1,16,11.4a65.49,65.49,0,0,1-10.71-.77C2.65,10.17,1,9.54.94,8.94v0h0v0C.94,8.26,2.56,7.61,5.29,7.13ZM9.51,23.18A32.34,32.34,0,0,1,.94,20.77V10a.29.29,0,0,1,.45-.25,13.31,13.31,0,0,0,3.86,1.12A65.9,65.9,0,0,0,16,11.64a65.9,65.9,0,0,0,10.75-.78A12.59,12.59,0,0,0,30.66,9.7a.26.26,0,0,1,.4.22V20.78a43.09,43.09,0,0,1-21.55,2.4Z" fill="#040000"/><path d="M15.57,24.47A41.3,41.3,0,0,1,9.38,24,32.5,32.5,0,0,1,.5,21.49l-.33-.17-.07-.4V9c0-1.24,1.56-2,5-2.64A66.12,66.12,0,0,1,16,5.52a66.21,66.21,0,0,1,10.86.79c3.48.6,5,1.4,5,2.57V21.35l-.39.15a46.16,46.16,0,0,1-12.35,2.83A35.56,35.56,0,0,1,15.57,24.47Zm-14-4.09A32.57,32.57,0,0,0,9.6,22.59h0a42.49,42.49,0,0,0,20.86-2.23V10.49a15.7,15.7,0,0,1-3.6,1A66.12,66.12,0,0,1,16,12.24a66.12,66.12,0,0,1-10.86-.79,16.24,16.24,0,0,1-3.6-1ZM1.6,8.88A9.64,9.64,0,0,0,5.39,10,65.5,65.5,0,0,0,16,10.8,65.5,65.5,0,0,0,26.61,10,9.83,9.83,0,0,0,30.4,8.88c-.29-.24-1.3-.72-3.79-1.16A65.5,65.5,0,0,0,16,7a65.5,65.5,0,0,0-10.61.76h0C2.9,8.16,1.89,8.64,1.6,8.88Z" fill="#040000"/></svg>',
    text: {
      x: 0.22101449275362312,
      y: 0.46739130434782605,
      width: 0.5344202898550725,
      height: 0.19202898550724637,
      id: 'e383f6',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '6347676cc15b861924ca6111',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:18:36.051Z',
    __v: 0,
    path: [
      {
        d: 'M1022.26 307.91c0-32.87-82.43-54.09-151.58-66.1C774.84 225.16 647.46 216 512 216s-262.84 9.17-358.68 25.82C84.17 253.82 1.74 275 1.74 307.91a20.06 20.06 0 0 0 0.17 2.46v399l2.18 1.1c1.09 0.55 110.84 55.14 290 82.25A1369.1 1369.1 0 0 0 498.87 808q58.32 0 117-4.87c135.35-11.26 271.17-42.2 403.68-92l2.58-1V310.38a20.36 20.36 0 0 0 0.13-2.47z m-867.58-58.29c95.41-16.57 222.32-25.7 357.32-25.7s261.91 9.13 357.32 25.7c90.8 15.78 145 37.57 145 58.29 0 0.43 0 0.86-0.08 1.29h-0.09v0.71c-3.37 20.12-57 41-144.84 56.28C773.91 382.77 647 391.9 512 391.9s-261.91-9.13-357.32-25.71C66.8 350.93 13.2 330 9.84 309.91v-1.29H9.7v-0.71c-0.03-20.72 54.18-42.51 144.98-58.29z m141 535.32c-164.25-24.8-269.62-72.76-285.84-80.48V325.22c22.42 23.21 87.33 39 143.48 48.79 95.84 16.65 223.22 25.82 358.68 25.82s262.84-9.17 358.68-25.83c56.15-9.76 121.06-25.58 143.48-48.79v379.5c-297.29 111.07-554.72 104.97-718.51 80.23z',
        fill: null,
        stroke: null,
      },
    ],
  },
  {
    title: '圆形',
    content:
      '<path xmlns="http://www.w3.org/2000/svg" d="M983.852402 313.393773A511.938806 511.938806 0 1 0 1023.960687 512.031452a508.659575 508.659575 0 0 0-40.108285-198.637679zM513.636579 1014.381746C236.636241 1014.381746 11.286284 789.03179 11.286284 512.031452S236.636241 9.681157 513.636579 9.681157s502.350294 225.359924 502.350294 502.350295-225.349956 502.350294-502.350294 502.350294z" p-id="12789"/>',
    icon: '<svg style="left: 1px; top: 1px; width: 32px; height: 30px; display: block; position: relative; overflow: hidden;" _mstVisible="4"><g _mstVisible="5"><g _mstVisible="6"></g><g _mstVisible="6"><g transform="translate(0.5,0.5)" style="visibility: visible;" _mstVisible="7"><ellipse cx="15.98" cy="14.96" rx="13.600000000000001" ry="13.600000000000001" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-width="1.3" pointer-events="all" _mstVisible="8"></ellipse></g></g><g _mstVisible="6"></g><g _mstVisible="6"></g></g></svg>',
    text: {
      x: 0.20652173913043476,
      y: 0.3025362318840579,
      width: 0.572463768115942,
      height: 0.39855072463768115,
      id: 'fae4d2',
    },
    currentColor: true,
    viewBox: null,
    sortId: 0,
    svgWidth: 1024,
    svgHeight: 1024,
    _id: '63476788c15b861924ca611c',
    linkPoint: [],
    tags: [],
    catalogId: '634763ddc15b861924ca6045',
    createTime: '2022-10-13T01:19:04.037Z',
    __v: 0,
    path: [
      {
        d: 'M983.852402 313.393773A511.938806 511.938806 0 1 0 1023.960687 512.031452a508.659575 508.659575 0 0 0-40.108285-198.637679zM513.636579 1014.381746C236.636241 1014.381746 11.286284 789.03179 11.286284 512.031452S236.636241 9.681157 513.636579 9.681157s502.350294 225.359924 502.350294 502.350295-225.349956 502.350294-502.350294 502.350294z',
        fill: null,
        stroke: null,
      },
    ],
  },
]

// 图标路径
export const svgIcon = {
  line: {
    label: '直线',
    type: 'line',
    t: '1737450685906',
    path: 'M191.488 864.768c-8.192 0-16.384-3.072-22.528-9.216-12.288-12.288-12.288-32.768 0-45.056L809.472 168.96c12.288-12.288 32.768-12.288 45.056 0s12.288 32.768 0 45.056L214.016 855.04c-6.144 6.144-14.336 9.728-22.528 9.728z',
  },
  lineAndArrow: {
    label: '直线箭头',
    type: 'lineAndArrow',
    t: '1737450898807',
    path: 'M865.28 128l-67.84 203.648-43.264-43.2-580.928 580.992L128 824.192 708.928 243.2l-47.296-47.36L865.28 128z',
  },
  brokenLine: {
    label: '折线',
    type: 'brokenLine',
    t: '1737451633443',
    path: 'M111.36 774.741333l-43.733333-45.397333L421.12 388.992l171.690667 177.194667 210.218666-216.32 44.928 44.245333-255.530666 262.314667-172.842667-178.389334z',
  },
  brokenLineAndArrow: {
    label: '折线箭头',
    type: 'brokenLineAndArrow',
    t: '1737451633443',
    path: 'M963.541333 238.037333l-270.293333 61.141334 101.973333 42.922666 62.506667 61.354667 43.306667 100.096z M111.36 774.741333l-43.733333-45.397333L421.12 388.992l171.690667 177.194667 210.218666-216.32 44.928 44.245333-255.530666 262.314667-172.842667-178.389334z',
  },
  curve: {
    label: '曲线',
    type: 'curve',
    t: '1737451786526',
    path: 'M364.117333 101.845333c116.309333 11.818667 200.021333 40.533333 239.274667 95.872 51.925333 73.173333 14.72 171.349333-111.744 294.528a32 32 0 1 1-44.629333-45.824c106.581333-103.850667 132.352-171.946667 104.192-211.669333-25.045333-35.370667-94.634667-59.178667-193.578667-69.248a1261.909333 1261.909333 0 0 0-168.746667-4.693333l-40.704 2.005333-17.365333 1.28a32 32 0 0 1-5.632-63.786667l18.858667-1.365333L157.866667 98.133333c66.773333-3.541333 138.453333-3.2 206.208 3.712z M447.018667 446.421333a32 32 0 1 1 44.629333 45.824c-106.581333 103.893333-132.352 171.946667-104.192 211.712 25.045333 35.328 94.634667 59.178667 193.578667 69.205334 64 6.528 132.608 6.826667 196.352 3.456l30.464-2.005334a32 32 0 1 1 5.632 63.744l-18.858667 1.408-13.866667 0.768c-66.773333 3.541333-138.453333 3.2-206.208-3.669333-116.309333-11.818667-200.021333-40.533333-239.274666-95.872-51.925333-73.173333-14.72-171.349333 111.744-294.570667z',
  },
  curveAndArrow: {
    label: '曲线箭头',
    type: 'curveAndArrow',
    t: '1737451786126',
    path: 'M717.738667 962.56l161.109333-137.258667a20.778667 20.778667 0 0 0 0-32.512l-160.768-136.96c-12.928-11.008-35.072-3.242667-35.072 12.373334L682.666667 950.144c-0.042667 15.616 22.101333 23.466667 35.072 12.373333 M364.117333 101.845333c116.309333 11.818667 200.021333 40.533333 239.274667 95.872 51.925333 73.173333 14.72 171.349333-111.744 294.528a32 32 0 1 1-44.629333-45.824c106.581333-103.850667 132.352-171.946667 104.192-211.669333-25.045333-35.370667-94.634667-59.178667-193.578667-69.248a1261.909333 1261.909333 0 0 0-168.746667-4.693333l-40.704 2.005333-17.365333 1.28a32 32 0 0 1-5.632-63.786667l18.858667-1.365333L157.866667 98.133333c66.773333-3.541333 138.453333-3.2 206.208 3.712z M447.018667 446.421333a32 32 0 1 1 44.629333 45.824c-106.581333 103.893333-132.352 171.946667-104.192 211.712 25.045333 35.328 94.634667 59.178667 193.578667 69.205334 64 6.528 132.608 6.826667 196.352 3.456l30.464-2.005334a32 32 0 1 1 5.632 63.744l-18.858667 1.408-13.866667 0.768c-66.773333 3.541333-138.453333 3.2-206.208-3.669333-116.309333-11.818667-200.021333-40.533333-239.274666-95.872-51.925333-73.173333-14.72-171.349333 111.744-294.570667z',
  },
  horizontalLine: {
    label: '默认',
    type: 'horizontalLine',
    t: '1737451787526',
    path: 'M927.5 543.9H97.1c-17.6 0-31.9-14.3-31.9-31.9 0-17.6 14.3-31.9 31.9-31.9h830.4c17.6 0 31.9 14.3 31.9 31.9-0.1 17.6-14.3 31.9-31.9 31.9z',
  },
  dashed1: {
    label: '样式1',
    type: 'dashed1',
    t: '1737481786526',
    path: 'M1898.666667 540.444444h54.499555v-56.888888h-54.499555v56.888888z m-218.055111 0h108.999111v-56.888888h-108.999111v56.888888z m-218.112 0h109.056v-56.888888h-109.056v56.888888z m-218.055112 0h109.056v-56.888888h-109.056v56.888888z m-218.055111 0h108.999111v-56.888888h-108.999111v56.888888z m-218.112 0h109.056v-56.888888h-109.056v56.888888z m-218.055111 0h109.056v-56.888888h-109.056v56.888888z m-218.055111 0h108.999111v-56.888888H372.167111v56.888888z m-163.555555 0h54.499555v-56.888888h-54.499555v56.888888z',
  },
  dashed2: {
    label: '样式2',
    type: 'dashed2',
    t: '1757451786526',
    path: 'M298.666667 540.444444H189.610667v-56.888888H298.666667v56.888888z m436.167111 0H516.721778v-56.888888h218.112v56.888888z m436.110222 0H952.888889v-56.888888h218.055111v56.888888z m436.167111 0h-218.055111v-56.888888h218.055111v56.888888z m327.111111 0h-109.056v-56.888888H1934.222222v56.888888z',
  },
  blockArrow: {
    label: '实心箭头',
    type: 'block',
    t: '1737600818102',
    path: 'M320 603.52a12.8 12.8 0 0 1-17.92 11.712L91.2 523.84a12.8 12.8 0 0 1 0-23.488L302.08 409.024A12.8 12.8 0 0 1 320 420.736v59.392h640a32 32 0 0 1 0 64H320v59.392z',
  },
  classicArrow: {
    label: '经典箭头',
    type: 'classic',
    t: '1737600892100',
    path: 'M170.666667 491.52h819.2v40.96H170.666667zM375.466667 375.466667l-68.266667 136.533333 68.266667 136.533333-375.466667-136.533333z',
  },
  diamondArrow: {
    label: '菱形箭头',
    type: 'diamond',
    t: '1737601019068',
    path: 'M928 512a32 32 0 0 0-32-32H178.645333a32 32 0 0 0 0 64H896a32 32 0 0 0 32-32z M229.376 411.648a20.266667 20.266667 0 0 0-28.672 0L114.773333 497.621333a20.266667 20.266667 0 0 0 0 28.672l85.973334 85.973334a20.266667 20.266667 0 0 0 28.672 0l85.973333-85.973334a20.266667 20.266667 0 0 0 0-28.672L229.376 411.648z M215.04 454.656l57.344 57.301333-57.344 57.344-57.344-57.344 57.344-57.301333z m-14.336-43.008a20.266667 20.266667 0 0 1 28.672 0l85.973333 85.973333a20.266667 20.266667 0 0 1 0 28.672L229.376 612.266667a20.266667 20.266667 0 0 1-28.672 0L114.773333 526.293333a20.266667 20.266667 0 0 1 0-28.672l85.973334-85.973333z',
  },
  noneArrow: {
    label: '无箭头',
    type: '',
    t: '1737601173066',
    path: 'M96 544h832V448h-832zM96 544h832',
  },
  circleArrow: {
    label: '圆形箭头',
    type: 'circle',
    t: '1737601393656',
    path: 'M928 512a32 32 0 0 0-32-32H164.693333a32 32 0 0 0 0 64H896a32 32 0 0 0 32-32zM279.808 440.32A101.290667 101.290667 0 1 0 136.533333 583.594667a101.290667 101.290667 0 1 0 143.317334-143.274667zM251.178667 468.992a60.8 60.8 0 1 1-85.973334 85.930667 60.8 60.8 0 0 1 85.973334-85.930667z m-114.688-28.672a101.376 101.376 0 1 1 143.36 143.36 101.376 101.376 0 0 1-143.36-143.36z',
  },
  ellipseArrow: {
    label: '实心箭头',
    type: 'ellipse',
    t: '1737601723364',
    path: 'M224 512a32 32 0 0 1 32-32h682.666667a32 32 0 0 1 0 64H256a32 32 0 0 1-32-32zM160 554.666667a53.333333 53.333333 0 1 0 0-106.666667 53.333333 53.333333 0 0 0 0 106.666667z m0 64a117.333333 117.333333 0 1 0 0-234.666667 117.333333 117.333333 0 0 0 0 234.666667z',
  },
}

// 连线配置-线列表
export const lineSvgList = [
  svgIcon['line'],
  svgIcon['brokenLine'],
  svgIcon['curveAndArrow'],
  svgIcon['horizontalLine'],
  svgIcon['dashed1'],
  svgIcon['dashed2'],
]
// 箭头配置-箭头列表
export const arrowSvgList = [
  svgIcon['blockArrow'],
  svgIcon['classicArrow'],
  svgIcon['diamondArrow'],
  svgIcon['noneArrow'],
  svgIcon['circleArrow'],
  svgIcon['ellipseArrow'],
]

// 绘制路径
export const drawPathShape = (ctx, shape, isHit = false) => {
  const { x, y, width: w, height: h, path } = shape
  for (let item of path) {
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath()
    for (let path of item.actions) {
      const transformData = transform(path)
      if (path.action == 'move') {
        ctx.moveTo(transformData.x, transformData.y)
      } else if (path.action == 'line') {
        ctx.lineTo(transformData.x, transformData.y)
      } else if (path.action == 'curve') {
        ctx.bezierCurveTo(
          transformData.x1,
          transformData.y1,
          transformData.x2,
          transformData.y2,
          transformData.x,
          transformData.y,
        )
      } else if (path.action == 'quadraticCurve') {
        ctx.quadraticCurveTo(transformData.x1, transformData.y1, transformData.x, transformData.y)
      } else if (path.action == 'close') {
        ctx.closePath()
      }
    }
    ctx.stroke()
    if (isHit) {
      ctx.fill()
    } else if (shape.fillStyle) {
      ctx.globalAlpha = shape.fillAlpha
      ctx.fill()
    }
    ctx.restore()
  }
  function transform(path) {
    const data = {}
    for (let key in path) {
      if (key == 'action') continue
      data[key] = eval(path[key])
    }
    return data
  }
}
// 将路径数组转换为路径字符串
export function pathArryToPathStr(pathArr, w, h) {
  // 初始化路径
  let path = ''
  // 遍历每个路径数据
  pathArr.forEach((item) => {
    item.actions.forEach((action) => {
      const x = eval(action.x) // 计算 x 坐标的表达式
      const y = eval(action.y) // 计算 y 坐标的表达式
      // console.log('action', action)

      switch (action.action) {
        case 'move':
          path += `M ${x} ${y} `
          break
        case 'line':
          path += `L ${x} ${y} `
          break
        case 'curve':
          const x1 = eval(action.x1)
          const y1 = eval(action.y1)
          const x2 = eval(action.x2)
          const y2 = eval(action.y2)
          path += `C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y} `
          break
        case 'quadraticCurve':
          const qx1 = eval(action.x1)
          const qy1 = eval(action.y1)
          path += `Q ${qx1} ${qy1}, ${x} ${y} `
          break
        case 'close':
          path += 'Z '
          break
        default:
          console.log('未知的 action:', action.action)
      }
    })
  })

  return path
}
