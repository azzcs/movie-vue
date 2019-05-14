<template>
  <div>
    <div class="movie-right-common">
      <div class="right-title-movie">
        <img src="../assets/img/rank.png" />排行榜
      </div>
      <div class="right-content-movie">
        <div
          v-for="(item,index) in list"
          v-bind:key="'right'+index"
          class="right-movie-li"
        >
          <router-link :to="{path:'/p/detail', query: {id:item.Id}}" @click.native="reload()">
            <h4>{{item.Name}}</h4>
            <p>{{item.UpdateStatus}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PRight",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.axios
      .get(this.apiPath + "/api/search?pageSize=15")
      .then(res => {
        this.list = res.data.List;
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {
    reload() {
        window.location.reload();
    }
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie-right-common {
  background-color: white;
  margin: 10px;
  padding: 6px;
}
.right-title-movie {
  height: 30px;
  line-height: 30px;
  color: #999;
      margin-bottom: 10px;
}
.right-title-movie img {
  float: left;
  height: 30px;
  margin-right: 5px;
}
.right-content-movie {
  overflow: hidden;
  margin-top: 5px;
}
.right-movie-li{
  border-top: 1px dashed #f5f5f5;
}
.right-movie-li a{
  color:  #999;
  position: relative;
  height: 100px;
}
.right-movie-li h4{
  text-align: left;
}
.right-movie-li p{
  text-align: right;
  margin-bottom: 4px;
}
</style>
