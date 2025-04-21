<script setup>
import { previewCells } from './data.js';
import Flow from './components/flow/index.vue';
</script>

<template>
  <n-tabs class="demo-tabs" default-value="if">
    <n-tab-pane name="if" display-directive="if" tab="flow编辑">
      <div class="demo">
        <Flow class="my-flow-1" :id="'flow-' + new Date().getTime() + 'true'" />
      </div>
    </n-tab-pane>
    <n-tab-pane name="preview" display-directive="preview" tab="flow预览">
      <Flow class="my-flow-1" :config="previewCells" :id="'flow-' + new Date().getTime() + 'true'" />
    </n-tab-pane>
    <n-tab-pane name="editPreview" display-directive="editPreview" tab="flow编辑回显"> 
      <Flow class="my-flow-1" :id="'flow-15896_true'" />
    </n-tab-pane>
  </n-tabs>
</template>


<style lang="scss" scoped>
.demo-tabs {
  padding: 0 5px;
}
.demo {
  display: flex;
  justify-content: space-evenly;
}
.my-flow-1,
.my-flow-2 {
  width: 96%;
  height: 90vh;
  border: 1px solid #ccc;
}
.my-flow-2 {
  float: right;
}
.my-flow {
  width: 100vw;
  height: 100vh;
  &:focus {
    outline: none;
  }
}
</style>
