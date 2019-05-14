<template>
  <div>
    <PHeader />
     <div class="movie-all-p">
    <div class="movie-left-p">
       <router-view />
    </div>
    <div class="movie-right-p">
      <PRight/>
    </div>
  </div>
     
    <PFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import PHeader from "@/components/PHeader.vue";
import PFooter from "@/components/PFooter.vue";
import PRight from "@/components/PRight.vue";

export default {
  name: "PMain",
  components: {
    PHeader,
    PFooter,
    PRight
  }
};
</script>
<style >
.movie-all-p{
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
.movie-left-p{
  float: left;
  width: 840px;
}
.movie-right-p{
  float: right;
  width: 360px;
}
body {
    background: #f8f8f8;
    color: #666;
    margin:0 auto;
}
button:focus{outline:0;}
*{
    margin: 0;
    padding: 0;
}
* li{
    list-style: none;
}

a {
    text-decoration: none;
}

.film-content-movie-p{
    overflow: hidden;
    /*color: #999;*/
    margin-top: 5px;

}
.film-content-movie-p li{
    float: left;
    width: 166px;
    height: 230px;
    text-align: center;
    position: relative;
}
.film-content-movie-p img{
    width: 96%;
    height: 200px;
}

.film-name-content-movie-p {
    position: absolute;
    left: 0;
    bottom: 10px;
    text-align: center;
    width: 100%;
    font-size: 14px;
    height: 20px;
    overflow: hidden;
}
.film-status-content-movie-p {
    position: absolute;
    right:2%;
    top: 0;
    text-align: center;
    font-size: 14px;
    height: 20px;
    overflow: hidden;
    color: white;
    background-color: #f90;
}


</style>
