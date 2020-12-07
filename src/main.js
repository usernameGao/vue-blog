// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import routerLimit from './router/permission.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment';
import '!style-loader!css-loader!../static/public.less';
// import '!style-loader!css-loader!swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/swiper.css'
import store from './vuex/store'
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/bar";
import 'echarts/lib/chart/line';
import qrcode from 'vue-qrcode-directive';

Vue.config.productionTip = false
//使用elementui
Vue.use(ElementUI);
//全局使用echarts
Vue.component('v-chart', ECharts)
//格式化时间
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {

  return moment(dataStr).format(pattern)

})
//使用二维码插件
Vue.use(qrcode);
//轮播图插件
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  routerLimit,
  store,
  components: { App },
  template: '<App/>'
})
