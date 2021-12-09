// 引入vue
import Vue from 'vue'
// 引入 App
import App from './App.vue'
// 關閉vue的生產提示
Vue.config.productionTip = false

// 創建vm
new Vue({
    el:'#app',
  render: h => h(App)
})