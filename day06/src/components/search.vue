<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" v-model.trim="keywd" @keyup.enter="searchMusic" />
      <button @click="searchMusic">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <!-- <div class="tab-bar">
        <router-link to="/results" class="bar-item" active-class="active">搜索结果</router-link>
        <router-link to="/player" class="bar-item" active-class="active">歌曲播放</router-link>
        <router-link to="/mv" class="bar-item" active-class="active">mv</router-link>
        <router-link to="/comment" class="bar-item" active-class="active">歌曲评论</router-link>
      </div>-->
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywd: ""
    };
  },
  methods: {
    searchMusic() {
      if (this.keywd == "") {
        this.$message.error('错了哦，这是一条错误消息');
        this.$notify({
          title: '警告',
          message: '亲，请你输入一点内容先啦！',
          duration: 0
        });
      } else {
        // 编程式导航并且使用动态路由传递一个参数
        this.$router.push("/results/" + this.keywd);
        // 这种方法虽然可以实现，但是不合理
        //window.location.reload();
      }
    }
  }
};
</script>

<!-- 当前文件的css使用src直接引入即可，要注意哦为了确保css的封闭性，要使用scoped -->
<style src="../assets/css/index.css" scoped></style>