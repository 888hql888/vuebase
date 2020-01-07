<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in picList" :key="index">
        <img :src="item.imageUrl" alt="轮播图">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return {
      picList:[]
    }
  },
  created(){
    this.$axios.get("/banner").then(data=>{
      // 它遇到console的时候，是不首先要在自己的作用域里面找有没有console这个方法 axios 里面
      // 当他找不到的时候，是不是要根据闭包的原理向上一层查找，vue实例里面
      // 在vue实例里面还是找不到这个console方法，按照常理来讲是不是继续往上找，但是vue脚手架做了一个eslint的严格模式判断
      // 这种判断只允许闭包向上调用两次
      // window对象在vue实例化的时候作为参数传递进来作为兼容性处理了
      window.console.log(data.data.banners)
      this.picList = data.data.banners
    }).catch(err=>{
      window.console.log(err)
    })
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>