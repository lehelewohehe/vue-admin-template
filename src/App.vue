<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      {{ a }}
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
    <el-popconfirm title="Are you sure to delete this?">
      <template #reference><el-button>Delete</el-button></template>
    </el-popconfirm>
  </el-config-provider>
</template>
<script lang="ts" setup>
const a = ref(0);
const zIndex = 3000;
const size = 'small';
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
