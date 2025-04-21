<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <icons size="18" :name="icon" class="tool-svg" :style="style" @click="onClick" />
    </template>
    {{ tooltip }}
  </n-tooltip>
</template>

<script setup>
defineProps({
  icon: String,
  tooltip: String,
  style: String,
  onClick: Function,
})
</script>

<style lang="scss" scoped>
/* MapToolItem组件的样式 */
.tool-svg {
  display: block;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
