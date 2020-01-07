<template>
  <div id="app">
    <search></search>
  </div>
</template>

<script>
// 导入一个局部使用的组件 search.hljs-value
import Search from "./components/search"
export default {
  name: "app",
  // 一定要记住哦，局部组是要注册的哦
  components:{
    Search
  }
};
</script>

