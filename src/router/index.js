import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminOrderId from '@/components/AdminOrderId'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/admin',
      name: 'AdminOrderId',
      component: AdminOrderId
    }
  ]
})
