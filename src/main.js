// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import Cookies from 'js-cookie'
import axios from 'axios';
import './permission' // 路由验证

import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.stylus';//公共样式
import '@/icons' //Svg图标
import '@/components/autoTable/index.js' //定义table组件

const mock=require("../mock/mock")

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
