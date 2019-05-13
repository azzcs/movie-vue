<template>
  <div>
    <div class="header-movie">
      <div class="header-nav-movie">
        <router-link
          :to="{path:'/p/home', query: {}}"
          class="home-movie"
        >
          <img
            src="../static/logo.png"
            class="logo-movie"
          >123视频
        </router-link>
        <ul class="home-type">
          <li>

            <router-link
              exact-active-class="active"
              :to="{path:'/p/home'}"
              @click.native="reload()"
            >
              首页
            </router-link>
          </li>
          <li>
            <router-link
              exact-active-class="active"
              :to="{path:'/p/list', query: {nav1:'连续剧'}}"
              @click.native="reload()"
            >
              电视
            </router-link>
          </li>
          <li>
            <router-link
              exact-active-class="active"
              :to="{path:'/p/list', query: {nav1:'电影片'}}"
              @click.native="reload()"
            >
              电影
            </router-link>

          </li>
          <li>
            <router-link
              exact-active-class="active"
              :to="{path:'/p/list', query: {nav1:'综艺片'}}"
              @click.native="reload()"
            >
              综艺
            </router-link>

          </li>
          <li>
            <router-link
              exact-active-class="active"
              :to="{path:'/p/list', query: {nav1:'动漫片'}}"
              @click.native="reload()"
            >
              动漫
            </router-link>

          </li>

        </ul>
        <div class="search">
          <input
            class="search-query-movie-input"
            placeholder="请输入要搜索的名称"
            v-model="searchName"
            v-on:keyup.13="searchMovie"
          />
           <router-link
              exact-active-class=""
              :to="{path:'/p/list', query: {name:searchName}}"
              @click.native="reload()"
            >
              <img
              src="../static/movie/img/search.png"
              class="search-movie"
            >
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MHeader",
  data() {
    return {
      active: "首页",
      typeShow: false,
      searchName: ""
    };
  },
  methods: {
    reload() {
        window.location.reload();
    },
    searchMovie() {
      this.$router.push({path:"/p/list",query:{name:this.searchName}});
      window.location.reload();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-movie {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 50px;
  width: 100%;
  overflow: hidden;
}
.home-movie {
  float: left;
  line-height: 32px;
  font-size: 24px;
  color: #999;
  margin-top: 8px;
}

.logo-movie {
  float: left;
  height: 34px;
}
.home-type {
  height: 100%;
  float: left;
  margin-left: 10px;
}
.home-type li {
  list-style: none;
  float: left;
}
.home-type a {
  line-height: 50px;
  height: 50px;
  display: block;
  width: 60px;
  text-align: center;
  color: #999;
}
.active {
  color: #fff !important;
  background-color: #f90 !important;
}
.header-nav-movie {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
}
.search-movie {
  float: right;
  margin-right: -270px;
  height: 34px;
  cursor: pointer;
  margin-top: 8px;
}
.search-query-movie-input {
  width: 260px;
  border: 1px solid rgb(255, 153, 0);
  text-align: left;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #999;
  float: right;
  height: 32px;
  line-height: 32px;
  margin-right: 10px;
  padding: 0 5px;
  margin-top: 8px;
  outline-color:rgba(255, 153, 0,0.6);
  /* cursor: pointer; */
}
.search-query-movie-button {
  width: 50px;
  border: 1px solid rgb(255, 153, 0);
  text-align: center;
  background-color: rgb(255, 153, 0);
  color: white;
  margin-bottom: 10px;
  float: right;
  height: 32px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
