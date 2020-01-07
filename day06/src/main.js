import Vue from 'vue'
import App from './App.vue'

// 项目初始化的时候，我们将静态资源都放在了 assets 这个文件夹下面
// 定义一个全局的过滤器
// Vue.filter("sdf",function(val){
//   return val
// })

// 导入饿了么UI的插件库
import ElementUI from 'element-ui';
// 注意：导入饿了么UI的插件库，一定要记得引入其样式哦，并且我们是希望全局使用饿了么，所以样式应该写main.js
import 'element-ui/lib/theme-chalk/index.css';
// 注意：饿了么UI是作为中间件来使用的，所以，要使用use来注册
Vue.use(ElementUI);

// 导入axios网络请求插件
import Axios from "axios";
// 设置劝酒基地址，这样的话在调用的时候就不用写这么多基地址了，优势：生产环境和开发环境一般都是基地址改变一下即可
Axios.defaults.baseURL = 'https://autumnfish.cn';
// 将axios挂载到vue的原型上面，这样的话，我们就可以在任何地方直接使用 (vue实例)this.$axios来发送请求了
Vue.prototype.$axios = Axios;


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
import Swiper from "./components/swiper"
// 声明路由规则
const routes = [{
  path:"/results/:keywd",
  component:Results
},{
  path:"/player/:id",
  component:Player
},{
  path:"/mv",
  component:MV
},{
  path:"/comment",
  component:Comment
},{
  path:"/swiper",
  component:Swiper
},{
  path:"/",
  redirect:"/swiper"
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