import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/pages/Index.vue')), 'Index')
const Detail = r => require.ensure([], () => r(require('@/pages/detail.vue')), 'Detail')
const Cart = r => require.ensure([], () => r(require('@/pages/cart.vue')), 'Cart')
const Recommend = r => require.ensure([], () => r(require('@/pages/recommend.vue')), 'Recommend')
const List = r => require.ensure([], () => r(require('@/pages/list.vue')), 'List')
const IntroOne = r => require.ensure([], () => r(require('@/pages/introOne.vue')), 'IntroOne')
const IntroTwo = r => require.ensure([], () => r(require('@/pages/introTwo.vue')), 'IntroTwo')
const Login = r => require.ensure([], () => r(require('@/pages/login.vue')), 'Login')
const Register = r => require.ensure([], () => r(require('@/pages/register.vue')), 'Register')
const Tea = r => require.ensure([], () => r(require('@/pages/tea.vue')), 'Tea')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/introOne',
      component: IntroOne
    },
    {
      path: '/introTwo',
      component: IntroTwo
    },
    {
      path: '/tea',
      component: Tea
    }
  ]
})
