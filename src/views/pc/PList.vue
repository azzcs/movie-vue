<template>
  <div>
    <div
      class="module-movie"
      v-bind:style="{'min-height': scrollerHeight + 'px' }"
    >
      <div class="film-content-movie-p">
        <ul id="list">
          <li
            v-for="(item,index) in list"
            v-bind:key="'list'+index"
          >
            <router-link :to="{path:'/p/detail', query: {id:item.Id}}">
              <img :src="item.Img">
              <span class="film-name-content-movie-p">{{item.Name}}</span>
              <span class="film-status-content-movie-p">{{item.UpdateStatus}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div
        v-show="!more"
        style="text-align:center"
      >没有更多数据了</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "PList",
  data() {
    return {
      nav1: "",
      nav2: "",
      name: "",
      pageNum: 1,
      list: [],
      more: true,
      scrollerHeight: 500
    };
  },
  methods: {
    getData() {
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
        this.pageNum +
        "&pageSize=20";
      this.axios
        .get(url)
        .then(res => {
          var data = res.data.List;
          if (data.length < 1) {
            this.more = false;
            return;
          } else {
            if (this.pageNum === 1) {
              this.list = data;
            } else {
              this.list = this.list.concat(data);
            }
          }
          this.pageNum++;
        })
        .catch(res => {});
    },
    onScroll() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      console.log(
        "距顶部" +
          scrollTop +
          "可视区高度" +
          windowHeight +
          "滚动条总高度" +
          scrollHeight
      );

      if (scrollTop + windowHeight == scrollHeight) {
        if (this.more) {
          this.getData();
        }
      }
    }
  },
  created() {
    this.getData();
    var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    console.log(windowHeight);
    this.scrollerHeight = windowHeight - 120; //默认值
    this.list = [];

    window.addEventListener("scroll", this.onScroll);
  }
};
</script>
<style scoped>
.anchor-movie {
  margin-top: 10px;
  padding: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  background-color: white;
  overflow: hidden;
}

.anchor-movie li,
.tv-type-movie ul li {
  float: left;
  width: 25%;
  text-align: center;
}

.anchor-movie li a,
.tv-type-movie a {
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
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
.tv-status-content-movie {
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
.film-type-movie {
  margin-bottom: 5px;
}
.film-type-movie ul {
  overflow: hidden;
}
.film-type-movie li {
  float: left;
  width: 33.3%;
  text-align: center;
  margin-top: 5px;
}
.film-type-movie a {
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
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
