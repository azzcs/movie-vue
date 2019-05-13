// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-contrib-hls';
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(VideoPlayer);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false
// Vue.prototype.apiPath='http://192.168.32.223:8888'
Vue.prototype.apiPath=''
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
