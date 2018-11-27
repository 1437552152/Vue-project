import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import store from "@/config/store"
import routes from '@/config/router'
import axios from 'axios'
import http from '@/config/api'
import fastclick from 'fastclick'
import VueI18n from 'vue-i18n'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(VueI18n)
Vue.use(VueRouter);
Vue.prototype.$http = http
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.config.debug = true
//fastclick目的是为了减少点击时的延迟时间
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    fastclick.attach(document.body)
  }, false)
}
// 国际化
const i18n = new VueI18n({
  // locale: localStorage.getItem('Languages') === 'en' ? 'en' : 'zh',
  locale: 'zh',
  messages: {
    'zh': require('./assets/lang/zh.js'),
    'en': require('./assets/lang/en.js')
  }
})
const router = new VueRouter({
  mode: "hash",
  routes
});

// 路由验证
router.beforeEach((to, from, next) => {
  if (to.path == "/register") {
    alert(222)
  }
  next();
});
Vue.config.productionTip = false
new Vue({
  el: "#app",
  router,
  i18n,
  store,
  template: "<App/>",
  components: {
    App
  }
});
