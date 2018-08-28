import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import portrait from '@/portrait/portrait'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 写真页面
    {
      path: '/portrait',
      name: 'portrait',
      component: portrait
    }
  ]
})
