// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 设置请求跟路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';

// 清楚默认样式
import './css/common.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui
import './lib/mui/css/mui.min.css' 

// 导入扩展的icon
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

// 导入 comment组件
import commentComponent from './components/comment.vue'

Vue.component('comment', commentComponent)

// 导入moment 过滤时间
import moment from 'moment'
Vue.filter('dateFormat', (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(dateStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
