import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Portfolio from './views/Portfolio.vue'
import Login from './views/Login.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id',
      component: User,
      beforeEnter: (to, from, next) => {
        // if (user authorized to see page) {
          console.log(store)
          console.log(to);
        store.dispatch('getUserPage', {to}).then(() => {
          console.log(store.getters.getPageInfo);
          next()
        })

        // }
        // else (/login)
        // next()
      }
    },
    {
      path: '/portfolio/:name',
      component: Portfolio
    },
  ]
})