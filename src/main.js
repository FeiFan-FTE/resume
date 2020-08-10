/*
 * @Author: feifan
 * @Date: 2020-07-23 14:28:10
 * @LastEditors: feifan
 * @LastEditTime: 2020-08-10 14:46:54
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import uploader from 'vue-simple-uploader'
Vue.use(uploader)
Vue.config.productionTip = false
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
