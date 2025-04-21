// 快速选择颜色
export const quickColors = [
  '#FFFFFF',
  '#F2F2F2',
  '#D1F893',
  '#FEA048',
  '#8ED376',
  '#F26E7E',
  '#66C5C0',
  '#7A28FF',
  '#FDF1B1',
  '#6ED6FA',
  '#FFCEE0',
  '#A8CAEF',
  '#C5E158',
  '#838DFF',
  '#000000',
  '#707070',
]
// 文字对齐方式
export const svgTextAlignList = [
  {
    label: '左对齐',
    key: 'end',
  },
  {
    label: '居中',
    key: 'middle',
  },

  {
    label: '右对齐',
    key: 'start',
  },
]

// 节点-默认样式
export const nodeStyleDefault = {
  fontSize: 16,
  fontColor: '#D71239FF',
  backgroundColor: '#D71239FF',
  textAlign: 'left',
  borderColor: '#D71239FF',
}
// 更多下拉菜单
export const moreDropdownOptions = [
  {
    label: '复制',
    key: 'copyNode',
  },
  {
    label: '置顶层',
    key: 'toTop',
    children: [
      {
        label: '置顶层',
        key: 'top',
      },
      {
        label: '上移一层',
        key: 'up',
      },
    ],
  },
  {
    label: '置底层',
    key: 'toDown',
    children: [
      {
        label: '置底层',
        key: 'bottom',
      },
      {
        label: '下移一层',
        key: 'down',
      },
    ],
  },
]

// 边-默认样式
export const edgeStyleDefault = {
  strokeWidth: 1,
  stroke: '#000000',
  text: '',
}
