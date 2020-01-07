<template>
  <div class="player">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="mpic" alt />
    </div>
    <div class="right">
      <div class="title">
        <img :src="mpic" alt />
        <span>{{mname}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{mplayers}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{mal}}</span>
      </div>
      <audio class="audio" controls :src="msrc" autoplay loop></audio>
      <ul class="lyric-container">
        <li v-for="(item, index) in lyric" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 歌曲地址
      msrc: "",
      // 歌曲封面
      mpic: "",
      // 歌曲名
      mname: "",
      // 歌手
      mplayers: "",
      // 专辑名
      mal: "",
      // 歌词
      lyric: []
    };
  },
  created() {
    // 请求播放的音乐地址
    this.$axios.get(`/song/url?id=` + this.$route.params.id).then(data => {
      this.msrc = data.data.data[0].url;
    });
    // 请求播放的音乐封面
    this.$axios.get(`/song/detail?ids=` + this.$route.params.id).then(data => {
      // 封面地址
      this.mpic = data.data.songs[0].al.picUrl;
      // 专辑名
      this.mal = data.data.songs[0].al.name;
      // 歌手名
      this.mplayers = data.data.songs[0].ar[0].name;
      // 歌名
      this.mname = data.data.songs[0].name;
    });
    // 获取歌词
    this.$axios.get(`/lyric?id=${this.$route.params.id}`).then(backData => {
      // console.log(backData)
      // 保存歌词为数组
      this.lyric = backData.data.lrc.lyric.split("\n");
      // 循环数组 切掉 [00:00.000]
      for (let i = 0; i < this.lyric.length; i++) {
        this.lyric[i] = this.lyric[i].replace(/\[\d+:\d+\.\d+\]/,"");
      }
    });
  }
};
</script>

<style src="../assets/css/player.css" scoped></style>