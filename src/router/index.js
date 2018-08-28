import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home'
import photos from '@/photos/photos'
import cameramen from '@/cameramen/cameramen'
import paymentPage from '@/paymentPage/paymentPage'
import wedding from '@/home/wedding'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 作品展示页面
    {
      path: '/photos',
      name: 'photos',
      component: photos
    },
    // 摄影师页面
    {
      path: '/cameramen',
      name: 'cameramen',
      component: cameramen
    },
    // 支付页面
    {
      path: '/paymentPage',
      name: 'paymentPage',
      component: paymentPage
    },
    // 婚礼界面
    {
      path: '/wedding',
      name: 'wedding',
      component: wedding
    }
  ]
})
