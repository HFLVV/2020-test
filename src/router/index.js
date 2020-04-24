import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/Login' },
  {
    path: '/Login',
    component: resolve => (require(["../components/login/login.vue"], resolve)),
  },
  {
    path: '/Home',
    component: resolve => (require(["../views/Home.vue"], resolve)),
    children: [
      {
        path: 'Header',
        component: resolve => (require(["../views/Header.vue"], resolve))
      },
      {
        path: 'List',
        component: resolve => (require(["../views/List.vue"], resolve))
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
