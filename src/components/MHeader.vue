<template>
  <div>
    <div class="header-movie">
      <div class="header-nav-movie">
        <router-link :to="{path:'/m/home', params: {}}"  class="home-movie">
          <img
              src="../static/logo.png"
              class="logo-movie"
            >123视频
        </router-link>
        <img
          v-on:click="searchShow=!searchShow"
          src="../static/movie/img/search.png"
          class="search-movie"
        >
        <img
          v-on:click="typeShow=!typeShow"
          src="../static/movie/img/type.png"
          class="type-movie"
        >
         <router-link :to="{path:'/m/home', params: {}}"  ><img
            src="../static/movie/img/home.png"
            class="home-img-movie"
          ></router-link>
      </div>
    </div>
    <transition name="show">
      <div
        id="search-query-movie"
        class="search-query-movie"
        v-show="searchShow"
      >
        <input
          placeholder="请输入要搜索的名称"
          v-model="searchName"
        />
        <router-link :to="{path:'/m/list', query: {name:searchName}}" @click.native="searchMovie()">
        <button>搜索</button>
        </router-link>
      </div>
    </transition>
    <transition name="show">
      <div
        id="anchor-movie"
        class="anchor-movie"
        v-show="typeShow"
      >
        <li>
          <!-- <a href="/search?nav1=连续剧"> -->
          <router-link :to="{path:'/m/list', query: {nav1:'连续剧'}}" @click.native="searchMovie()">
            <img src="../static/movie/img/tv.png" />
            电视
          </router-link>
          <!-- </a> -->
        </li>
        <li>
          <!-- <a href="/search?nav1=电影片"> -->
          <router-link :to="{path:'/m/list', query: {nav1:'电影片'}}" @click.native="searchMovie()">
          <img src="../static/movie/img/movie.png" />
            电影
          </router-link>
          <!-- </a> -->
        </li>
        <li>
          <!-- <a href="/search?nav1=综艺片"> -->
          <router-link :to="{path:'/m/list', query: {nav1:'综艺片'}}" @click.native="searchMovie()">
          <img src="../static/movie/img/variety.png" />
            综艺
          </router-link>
          <!-- </a> -->
        </li>
        <li>
          <!-- <a href="/search?nav1=动漫片"> -->
          <router-link :to="{path:'/m/list', query: {nav1:'动漫片'}}" @click.native="searchMovie()">
          <img src="../static/movie/img/cartoon.png" />
            动漫
          </router-link>
          <!-- </a> -->
        </li>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "MHeader",
  data: function() {
    return {
      searchShow: false,
      typeShow: false,
      searchName: ""
    };
  },
  methods: {
    searchMovie() {
      window.location.reload()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-movie {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    background-color: white;
    min-height: 50px;
    width: 100%;
    overflow: hidden;
}
.home-movie {
    float: left;
    line-height: 32px;
    font-size: 24px;
    color: #999;
}

.logo-movie {
    float: left;
    height: 34px;
}

.home-img-movie {
    float: right;
    height: 90%;
    margin-right: 10px;
}
.type-movie {
    float: right;
    height: 75%;
    margin-right: 10px;
    margin-top: 3px;
    cursor: pointer;
}

.header-nav-movie {
    height: 34px;
    padding: 8px;
}
.search-movie {
    float: right;
    height: 100%;
    margin-right: 10px;
    cursor: pointer;
}
.search-query-movie{
    text-align: center;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
    width: 100%;
    max-width: 500px;
}
.search-query-movie input{
    width: 98%;
    height: 30px;
    border: 1px solid rgb(255,153,0);
    box-shadow: 0 2px 5px rgba(255,153,0, .1);
    text-align: center;
    border-radius: 16px;
    background-color: white;
    margin: 10px 0;
}
.search-query-movie button{
    width: 98%;
    height: 30px;
    border: 1px solid rgb(255,153,0);
    box-shadow: 0 2px 5px rgba(255,153,0, .1);
    text-align: center;
    border-radius: 16px;
    background-color: rgb(255,153,0);
    color: white;
    margin-bottom: 10px;
}
.anchor-movie {
    margin-top: 10px;
    padding: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
    overflow: hidden;
}

.anchor-movie li{
    float: left;
    width: 25%;
    text-align: center;

}

.anchor-movie a{
    background-color: #f5f5f5;
    color: #999;
    width: 98%;
    height: 98%;
    border-radius: 4px;
    text-align: center;
    padding: 5px 0;
    display: block;
}

.anchor-movie img {
    width: 30px;
    display: block;
    margin: 0 auto;
}
.show-enter-active {
    transition: all .3s ease;
}
.show-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.show-enter, .show-leave-to{
    transform: translateY(10px);
    opacity: 0;
}

</style>
