import customSvgNode from '../components/customNode/svgNode.vue'

import { register, getTeleport } from '@antv/x6-vue-shape'

export const initRegister = () => {
  register({
    shape: 'custom-vue-node',
    component: customSvgNode,
  })
}
