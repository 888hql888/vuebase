<template>
  <div id="app">
    <search></search>
    <button @click="changeArr">点我改变数组</button>
    <h2>{{arr[0] | formateName("我是参数") | formateName("我是参数") |formateName("我是参数")}}</h2>
  </div>
</template>

<script>
// 导入一个局部使用的组件 search.hljs-value
import Search from "./components/search";
export default {
  name: "app",
  data() {
    return {
      arr: ["蜡笔小新", "樱桃小丸子", "辣椒酱", "百变辣椒油"]
    };
  },
  methods: {
    changeArr() {
      window.console.log(this.arr);
      this.arr[1] += "烹饪犬夜叉";
      this.arr = [...this.arr];
    }
  },
  watch: {
    arr(newVal) {
      window.console.log(newVal);
    }
  },
  // 一定要记住哦，局部组是要注册的哦
  components: {
    Search
  },
  filters:{
    formateName:(name,str)=>{
      // 在过滤器里面不能使用 this ，如果说要是需要使用到this的过滤器，应该是使用计算属性
      window.console.log(this)
      return name+str
    }
  }
};
</script>

