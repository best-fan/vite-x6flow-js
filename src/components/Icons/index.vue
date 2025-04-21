<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '16px',
  },
  color: {
    type: String,
    default: '#333',
  },
  strokeWidth: {
    type: String,
    default: '2.5px',
  },
  defaultClass: String,
})

const icon = computed(() => icons[props.name])
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>

<style scoped></style>
