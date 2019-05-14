<template>
<div>
  <div class="movie-home-tv">
     <div class="module-movie">
      <div class="title-movie">
        <img src="../../assets/img/tv.png" />电视
        <router-link :to="{path:'/p/list', query: {nav1:'连续剧'}}">
          更多&nbsp·&nbsp·&nbsp·
        </router-link>
      </div>
      <div class="tv-type-movie">
        <ul>
          <li>
            <router-link :to="{path:'/p/list', query: {nav1:'连续剧'}}">
              全部
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'国产剧'}}">
              国产
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'香港剧'}}">
              香港
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'韩国剧'}}">
              韩国
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'欧美剧'}}">
              欧美
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'台湾剧'}}">
              台湾
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'日本剧'}}">
              日本
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'海外剧'}}">
              海外
            </router-link>
          </li>
        </ul>
      </div>
      <div class="film-content-movie-p">
        <ul id="tvList">
          <li
            v-for="(item,index) in tvList"
            v-bind:key="'tv'+index"
          >
            <router-link :to="{path:'/p/detail', query: {id:item.Id}}">
              <img :src="item.Img">
              <span class="film-name-content-movie-p">{{item.Name}}</span>
              <span class="film-status-content-movie-p">{{item.UpdateStatus}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="module-movie">
      <div class="title-movie">
        <img src="../../assets/img/movie.png" />电影
        <router-link :to="{path:'/p/list', query: {nav1:'电影片'}}">
          更多&nbsp·&nbsp·&nbsp·
        </router-link>
      </div>
      <div class="film-type-movie">
        <ul>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'动作片'}}">
              动作片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'喜剧片'}}">
              喜剧片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'爱情片'}}">
              爱情片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'科幻片'}}">
              科幻片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'恐怖片'}}">
              恐怖片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'剧情片'}}">
              剧情片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'战争片'}}">
              战争片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'纪录片'}}">
              纪录片
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/p/list', query: {nav2:'微电影'}}">
              微电影
            </router-link>
          </li>
        </ul>
      </div>
      <div class="film-content-movie-p">
        <ul id="filmList">
          <li
            v-for="(item,index) in filmList"
            v-bind:key="'film'+index"
          >
            <router-link :to="{path:'/p/detail', query: {id:item.Id}}">
              <img :src="item.Img">
              <span class="film-name-content-movie-p">{{item.Name}}</span>
              <span class="film-status-content-movie-p">{{item.UpdateStatus}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="module-movie">
      <div class="title-movie">
        <img src="../../assets/img/variety.png" />综艺
        <router-link :to="{path:'/p/list', query: {nav1:'综艺片'}}">
          更多&nbsp·&nbsp·&nbsp·
        </router-link>
      </div>
      <div class="film-content-movie-p">
        <ul id="varietyList">
          <li
            v-for="(item,index) in varietyList"
            v-bind:key="'variety'+index"
          >
            <router-link :to="{path:'/p/detail', query: {id:item.Id}}">
              <img :src="item.Img">
              <span class="film-name-content-movie-p">{{item.Name}}</span>
              <span class="film-status-content-movie-p">{{item.UpdateStatus}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="module-movie">
      <div class="title-movie">
        <img src="../../assets/img/cartoon.png" />动漫
        <router-link :to="{path:'/p/list', query: {nav1:'动漫片'}}">
          更多&nbsp·&nbsp·&nbsp·
        </router-link>
      </div>
      <div class="film-content-movie-p">
        <ul id="cartoonList">
          <li
            v-for="(item,index) in cartoonList"
            v-bind:key="'cartoon'+index"
          >
            <!--            <a href="'/p/detail'">-->
            <router-link :to="{path:'/p/detail', query: {id:item.Id}}">
              <img :src="item.Img">
              <span class="film-name-content-movie-p">{{item.Name}}</span>
              <span class="film-status-content-movie-p">{{item.UpdateStatus}}</span>
            </router-link>
            <!--            </a>-->
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'PHome',
 data() {
    return {
      tvList: [],
      filmList: [],
      varietyList: [],
      cartoonList: []
    };
  },
  mounted() {
    this.axios
      .get(this.apiPath + "/api/search?nav1=连续剧&pageSize=15")
      .then(res => {
        this.tvList = res.data.List;
      })
      .catch(res => {
        console.log(res);
      });
    this.axios
      .get(this.apiPath + "/api/search?nav1=电影片&pageSize=15")
      .then(res => {
        this.filmList = res.data.List;
      })
      .catch(res => {
        console.log(res);
      });
    this.axios
      .get(this.apiPath + "/api/search?nav1=综艺片&pageSize=15")
      .then(res => {
        this.varietyList = res.data.List;
      })
      .catch(res => {
        console.log(res);
      });
    this.axios
      .get(this.apiPath + "/api/search?nav1=动漫片&pageSize=15")
      .then(res => {
        this.cartoonList = res.data.List;
      })
      .catch(res => {
        console.log(res);
      });
  }
}
</script>

<style scoped>
.movie-home-tv{
  background-color: white;
  margin-top:10px;
}
.anchor-movie {
    margin-top: 10px;
    padding: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
    overflow: hidden;
}

.anchor-movie li, .tv-type-movie ul li {
    float: left;
    width: 25%;
    text-align: center;

}

.anchor-movie li a, .tv-type-movie a {
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

.tv-type-movie {
    overflow: hidden;
}

.tv-type-movie ul li {
    padding-top: 5px;
}

.module-movie {
    margin-top: 10px;
    padding: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
}

.title-movie {
    height: 30px;
    line-height: 30px;
    color: #999;
}

.title-movie img {
    float: left;
    height: 30px;
    margin-right: 5px;
}

.title-movie a {
    float: right;
    color: #999;
}

.tv-content-movie {
    height: 190px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    margin: 5px 0;
}

.tv-content-movie div {
    overflow: hidden;
    /*height: 150px;*/
    width: 1260px;
    position: absolute;
}

.tv-content-movie li {
    width: 130px;
    height: 190px;
    margin-right: 10px;
    float: left;
    position: relative;
    overflow: hidden;
}

.tv-content-movie img {
    width: 130px;
    height: 170px;
    /*border-radius: 4px;*/
}

.tv-name-content-movie {
    width: 130px;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    /*color: white;*/
    border-radius: 0 0 4px 4px;
    /*background-color: rgba(0, 0, 0, .07);*/
    font-size: 14px;
}
.tv-status-content-movie{
    /*width: 130px;*/
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    color: white;
    /*border-radius: 0 0 4px 4px;*/
    background-color: #f90;
    font-size: 14px;
}
.film-type-movie{
    margin-bottom: 5px;
}
.film-type-movie ul{
    overflow: hidden;
}
.film-type-movie li {
    float: left;
    width: 33.3%;
    text-align: center;
    margin-top: 5px;
}
.film-type-movie a{
    background-color: #f5f5f5;
    color: #999;
    width: 96%;
    height: 98%;
    border-radius: 4px;
    text-align: center;
    padding: 5px 0;
    display: block;
}


.recommend-movie {
    min-height: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .07);
    background-color: white;
}

.recommend-header-movie {
    overflow: hidden;
    background-color: white;
}

.recommend-header-movie h3 {
    float: left;
}

.recommend-header-movie a {
    float: right;
}
</style>
