<template>
  <div>
    <div class="detail-movie">
      <img
        id="img"
        :src="movie.Img"
      />
      <div class="detail-list-movie">
        <h4 id="name">{{movie.Name}}</h4>
        <p id="updateStatus">{{movie.UpdateStatus}}</p>
        <p id="language">语言：{{movie.Language}}</p>
        <p id="time">时间：{{movie.Time}}</p>
        <p id="director">导演：{{movie.Director}}</p>
        <p id="type">类型：{{movie.Type}}</p>
        <p id="actor">主演：{{movie.Actor}}</p>
      </div>
    </div>
    <div
      class="detail-m3u8-movie"
      v-show="playDiv == 'ckm3u8'"
    >
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="false"
        :options="playerOptions"
      >
      </video-player>
    </div>
    <div
      class="detail-kuyun-movie"
      v-show="playDiv == 'kuyun'"
    >
      <div class="detail-kuyun-parent-movie">
        <iframe
          ref="iframe"
          @load="iframeLoad"
          id="movie-iframe"
          frameborder="0"
          border="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          allowfullscreen="true"
          allowtransparency="false"
          :src="playUrlKuyun"
          style="width: 100%;height: 200px;"
        >
        </iframe>
        <div
          class="movie-iframe"
          v-if="kuyunLoading"
        >资源加载中，请稍候···</div>
      </div>
    </div>
    <div
      id="detail-play-movie"
      class="detail-play-movie"
    >
      <button
        class="detail-play-button-movie"
        v-bind:class="{ active: 'ckm3u8'==tabs }"
        name="m3u8"
        v-on:click="tabs='ckm3u8'"
      >播放1</button>
      <button
        class="detail-play-button-movie "
        v-bind:class="{ active: 'kuyun'==tabs }"
        name="kuyun"
        v-on:click="tabs='kuyun'"
      >播放2</button>
      <button
        class="detail-play-button-movie"
        v-bind:class="{ active: 'introduce'==tabs }"
        name="introduce"
        v-on:click="tabs='introduce'"
      >介绍</button>
      <!-- <img
        v-on:click="reverse()"
        src="../../assets/img/sort.png"
      /> -->
      <div
        id="m3u8"
        class="detail-introduce-movie"
        v-show="'ckm3u8'==tabs"
      >
        <ul>
          <li
            v-for="(item,index) in ckm3u8"
            v-bind:key="'ckm3u8'+index"
          >
          <router-link :to="{path:'/m/detail', query: {id:id,index:index,tabs:'ckm3u8'}} " @click.native="reload()">
            <button v-bind:class="{ 'num-active': item==playUrl  }">{{getName(item)}}</button>
             </router-link>
          </li>
        </ul>
      </div>
      <div
        id="kuyun"
        class="detail-introduce-movie"
        v-show="'kuyun'==tabs"
      >
        <ul>
          <li
            v-for="(item,index) in kuyun"
            v-bind:key="'kuyun'+index"
          >
          <router-link :to="{path:'/m/detail', query: {id:id,index:index,tabs:'kuyun'}}" @click.native="reload()">
            <button v-bind:class="{ 'num-active': item==playUrl  }">{{getName(item)}}</button>
             </router-link>
          </li>
        </ul>
      </div>
      <div
        id="introduce"
        class="detail-introduce-movie"
        v-show="'introduce'==tabs"
      >
        <p>简介：{{movie.Introduce}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { videoPlayer } from "vue-video-player";
export default {
  name: "MDetail",
  data: function() {
    return {
      movie: {},
      kuyun: [],
      ckm3u8: [],
      tabs: "",
      playDiv: "",
      playUrl: "",
      id:"",
      playUrlKuyun:"",
      kuyunLoading: true,
      playerOptions: {
        playsinline: true,
        playbackRates: [0.7, 1.0,1.25, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "application/x-mpegURL",
            src: "index.m3u8" //你的m3u8地址（必填）
          }
        ],
        // poster: "poster.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    };
  },
  created: function() {
    var index = this.$route.query.index//播放下标
    var tabs = this.$route.query.tabs//播放类型
    this.tabs = tabs;
    this.playDiv = tabs;
    var url = this.apiPath + "/api/movie/" + this.$route.query.id;
    this.axios
      .get(url)
      .then(res => {
        this.movie = res.data;
        this.kuyun = res.data.MovieContent.kuyun;
        this.ckm3u8 = res.data.MovieContent.ckm3u8;
        var playUrl = ""
        if (tabs=="ckm3u8") {
          playUrl= this.ckm3u8[index];
          this.playerOptions.sources[0].src = playUrl.split("$")[1];
        }else{
          playUrl= this.kuyun[index];
          this.kuyunLoading = true;
          this.playUrlKuyun = playUrl.split("$")[1]
          this.playerOptions.sources[0].src = "index.m3u8";
        }
        document.getElementsByTagName('title')[0].innerHTML="123视频-"+res.data.Name+"-"+playUrl.split("$")[0]
        this.playerOptions.sources[0].src = playUrl.split("$")[1];
        this.playUrl = playUrl;
        this.id = this.movie.Id
      })
      .catch(res => {
        console.log(res);
      });
      window.scrollTo(0,0);
      
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    iframeLoad() {
      this.kuyunLoading = false;
    },
    reverse() {
      if (this.tabs == "ckm3u8") {
        this.ckm3u8 = this.ckm3u8.reverse();
      } else if (this.tabs == "kuyun") {
        this.kuyun = this.kuyun.reverse();
      }
    },
    getName(url) {
      return url.split("$")[0];
    },
    // confirmEnding(str, target) {
    //   var start = str.length - target.length;
    //   var arr = str.substr(start, target.length);
    //   if (arr === target) {
    //     return true;
    //   }
    //   return false;
    // },
    // play(url,index) {
    //   document.getElementsByTagName('title')[0].innerHTML=this.movie.Name+"-"+url.split("$")[0]+"-123视频"
    //   this.currentIndex = index
    //   var playUrl = url.split("$")[1];
    //   if (this.$options.methods.confirmEnding(playUrl, "m3u8")) {
    //     this.playDiv = "ckm3u8";
    //     this.playUrl = "kuyun";
    //     this.playerOptions.sources[0].src = playUrl;
    //   } else {
    //     this.kuyunLoading = true;
    //     this.playDiv = "kuyun";
    //     this.playUrl = playUrl;
    //     this.playerOptions.sources[0].src = "index.m3u8";
    //   }
    //   console.log(this.currentIndex)
    // },
     reload() {
        window.location.reload();
    }
  }
};
</script>
<style scoped>
.detail-movie{
    margin-top: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
    overflow: hidden;
}
.detail-movie img{
    height: 175px;
    width: 35%;
    float: left;
}
.detail-list-movie{
    width: 62%;
    float: left;
    padding-left: 3%;
    word-wrap:break-word;
    word-break:break-all;
    min-height: 175px;

}
.detail-list-movie p{
    color: #999;
}

.num-active{
    background-color: #f90 !important;
    color: white !important;
}
.detail-m3u8-movie{
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
    overflow: hidden;
    position: relative;
    height: 200px;
}
.detail-kuyun-movie{
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
    overflow: hidden;
}
.detail-kuyun-parent-movie{
    width:100%;
    position: relative;
}
.movie-iframe{
    position: absolute;
    z-index: 1;
    left: 0px;
    top: 0px;
    width: 100%;
    background-color: rgb(34, 34, 34);
    color: white;
    text-align: center;
    height: 200px;
    line-height: 200px;
    margin: 0;
}
.detail-introduce-movie{
    color: #999;
    width: 100%;

}
.detail-play-movie{
    font-size:0;
    padding-top: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
}

.detail-play-movie button{
    border: none;
    background-color: #f5f5f5;
    color: #999;
    width: 70px;
    height: 45px;

}
.detail-play-movie img{
    background-color: #f5f5f5;
    color: #999;
    float: right;
    width: 37px;
    margin: 4px 14px;
}
.detail-introduce-movie{
    font-size: 14px;
    background-color: white;
    color: #999;
    overflow: hidden;
    padding: 2%;
    min-height: 100px;
    width: 96%;
}
.detail-introduce-movie li{
    float: left;
    width: 33%;
    text-align: center;
}
.detail-introduce-movie button{
    margin-top: 2px;
    width: 98%;
    height: 40px;
    background-color: #f5f5f5;
    color: #999;
    display: block;
    line-height: 40px;
}
.active{
    background-color: white !important;
}

</style>