import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import brandIntroduction from '@/home/brandIntroduction'
import portrait from '@/portrait/portrait'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/brandIntroduction',
      name: 'brandIntroduction',
      component: brandIntroduction
    },
    // 写真页面
    {
      path: '/portrait',
      name: 'portrait',
      component: portrait
    }
  ]
})
