<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text" />
      <button>
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <router-link to="/results" class="bar-item" active-class="active">搜索结果</router-link>
        <router-link to="/player" class="bar-item" active-class="active">歌曲播放</router-link>
        <router-link to="/mv" class="bar-item" active-class="active">mv</router-link>
        <router-link to="/comment" class="bar-item" active-class="active">歌曲评论</router-link>
      </div>
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- 当前文件的css使用src直接引入即可，要注意哦为了确保css的封闭性，要使用scoped -->
<style src="../assets/css/index.css" scoped></style>