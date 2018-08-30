import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import brandIntroduction from '@/home/brandIntroduction'
import portrait from '@/portrait/portrait'
import wedding from '@/home/wedding'
import gravida from '@/home/gravida'

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
    },
    // 婚礼界面
    {
      path: '/wedding',
      name: 'wedding',
      component: wedding
    },
    // 孕妇界面
    {
      path: '/gravida',
      name: 'gravida',
      component: gravida
    }
  ]
})
