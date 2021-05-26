import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './mock'

// Vue.use(Antd)

// Vue.nextTick(() => {
//   const app = new Vue({
//     router,
//     store,
//     render: h => h(App)
//   })
//   setTimeout(() => {
//     app.$mount('#app')
//   }, 200)
// })

createApp(App, Antd).use(store).use(router).use(Antd).mount('#app')
// Vue.createApp(App).use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).mount('#app')
