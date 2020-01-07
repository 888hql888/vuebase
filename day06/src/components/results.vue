<template>
  <div id="myresults" ref="myres">
    <div class="result-wrapper">
      <div class="song" v-for="music in musicList" :key="music.id">
        <div class="name">
          <span class="iconfont icon-play" @click="gotoPlayer(music.id)"></span>
          <span @clcik="gotoComment">{{music.name}}</span>
          <span @click="gotoMv" class="iconfont icon-editmedia" v-if="music.mvid != 0"></span>
        </div>
        <div class="singer">{{ music.artists | formateArt }}</div>
        <div class="album">《{{ music.album.name }}》</div>
        <div class="time">{{ music.duration | formateTmie}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入better-scroll插件
import BScroll from "better-scroll";
export default {
  data() {
    return {
      musicList: [],
      myscroll:null
    };
  },
  methods: {
    gotoPlayer(id) {
      this.$router.push("/player/" + id);
    },
    gotoComment() {
      this.$router.push("/comment");
    },
    gotoMv() {
      this.$router.push("/mv");
    },
    // 抽离数据请求的方法
    getData(keywd) {
      this.$axios
        .get("/search?keywords=" + keywd)
        .then(data => {
          this.musicList = data.data.result.songs;
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  created() {
    this.getData(this.$route.params.keywd);
  },
  mounted(){
    this.myscroll = new BScroll(this.$refs.myres)
  },
  // 使用 watch 侦听器（监听器）
  watch: {
    "$route.params.keywd": function(newVal, oldVal) {
      window.console.log("新的值是：" + newVal);
      window.console.log("旧的值是：" + oldVal);
      this.getData(newVal);
    },
    musicList(newVal, oldVal) {
      window.console.log("新的值是：" + newVal);
      window.console.log("旧的值是：" + oldVal);
      this.myscroll.refresh();
    }
  },
  // 定义过滤器
  filters: {
    // 定义歌曲歌唱者的过滤器
    formateArt(arr) {
      let art = "";
      for (let i = 0; i < arr.length; i++) {
        art += arr[i].name + " ";
      }
      return art;
    },
    // 定义歌曲时长的过滤器
    formateTmie(num) {
      return ~~(num / 1000 / 60) + "分" + (~~(num / 1000) % 60) + "秒";
    }
  }
};
</script>

<style src="../assets/css/results.css" scoped></style>
<style scoped>
#myresults{
  height:300px;
  border:1px solid #ccc;
  overflow: hidden;
}
</style>