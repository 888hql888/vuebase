import Vue from 'vue'
import App from './App.vue'

// 项目初始化的时候，我们将静态资源都放在了 assets 这个文件夹下面

// 引入全局使用的css文件
import "./assets/css/iconfont.css"

// 下包，导包
import VueRouter from "vue-router"
// 注册路由中间件
Vue.use(VueRouter)
// 导入路由组件
import Results from "./components/results"
import Player from "./components/player"
import MV from "./components/mv"
import Comment from "./components/comment"
// 声明路由规则
const routes = [{
  path:"/results",
  component:Results
},{
  path:"/player",
  component:Player
},{
  path:"/mv",
  component:MV
},{
  path:"/comment",
  component:Comment
},{
  path:"/",
  redirect:"/results"
}]
// 实录化vuerouter对象
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
// 将路由实例化对象挂载到vue上面去
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
