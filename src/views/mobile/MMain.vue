<template>
  <div>
    <MHeader />
      <router-view />
    <MFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";
export default {
  name: "MMain",
  components: {
    MHeader,
    MFooter
  }
};
</script>
<style>
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

.film-content-movie{
    overflow: hidden;
    /*color: #999;*/
    margin-top: 5px;

}
.film-content-movie li{
    float: left;
    width: 33.3%;
    height: 180px;
    text-align: center;
    position: relative;
}
.film-content-movie img{
    width: 96%;
    height: 150px;
}

.film-name-content-movie {
    position: absolute;
    left: 0;
    bottom: 10px;
    text-align: center;
    width: 100%;
    font-size: 14px;
    height: 20px;
    overflow: hidden;
}
.film-status-content-movie {
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
