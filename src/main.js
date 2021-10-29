import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 引入自适应函数
// import '@/util/rem'

// 全局样式和变量等
import '@/assets/styles/index.scss'

// 引入包
import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts

new Vue({
  render: (h) => h(App)
}).$mount('#app')
