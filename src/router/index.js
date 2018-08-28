import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
