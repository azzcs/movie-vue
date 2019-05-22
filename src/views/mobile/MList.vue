<template>
  <div v-bind:style="{ position: 'relative', height: scrollerHeight + 'px' }">
    <scroller
      :on-infinite="infinite"
      :on-refresh="refresh"
      ref="my_scroller"
    >
      <div class="module-movie">
        <!-- <div class="title-movie">
          <img src="../../assets/img/cartoon.png" />动漫
          <a href="/search?nav1=动漫片">更多&nbsp·&nbsp·&nbsp·</a>
        </div> -->
        <div class="film-content-movie-m">
          <ul id="list">
            <li
              v-for="(item,index) in list"
              v-bind:key="'list'+index"
            >
              <router-link :to="{path:'/m/detail', query: {id:item.Id,index:0,tabs:'ckm3u8'}}">
                <img :src="item.Img">
                <span class="film-name-content-movie-m">{{item.Name}}</span>
                <span class="film-status-content-movie-m">{{item.UpdateStatus}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

    </scroller>
    <!-- <MFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "MList",
  data: function() {
    return {
      nav1: "",
      nav2: "",
      name: "",
      pageNum: 1,
      list: [],
      scrollerHeight: 500
    };
  },
  mounted() {
    this.list = [],
    this.scrollerHeight= document.documentElement.clientHeight-50;//默认值
    window.scrollTo(0,0);
  },
  methods: {
    getData(pageNum, done) {
      if (this.$route.query.nav1) {
        this.nav1 = this.$route.query.nav1;
      }
      if (this.$route.query.nav2) {
        this.nav2 = this.$route.query.nav2;
      }
      if (this.$route.query.name) {
        this.name = this.$route.query.name;
      }
      var url =
        this.apiPath +
        "/api/search?nav1=" +
        this.nav1 +
        "&nav2=" +
        this.nav2 +
        "&name=" +
        this.name +
        "&pageNum=" +
        pageNum;
      this.axios
        .get(url)
        .then(res => {
          var data = res.data.List
          if(data.length<1){
            done(true)
            return
          }else{
            if (done) done()
          }
          if (this.pageNum === 1) {
            this.list = data;
          } else {
            this.list = this.list.concat(data);
          }
        })
        .catch(res => {

        });
    },
    infinite(done) {
       //每当向上滑动的时候就让页数加1
      this.getData(this.pageNum,done)
      this.pageNum++;
    },
    refresh(done) {
      done(true)
      //这是向下滑动的时候请求最新的数据
      // this.pageNum=1;
      // this.getData(this.pageNum,done)
    }
  }
};
</script>
<style scoped>
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
