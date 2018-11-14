import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Portfolio from './views/Portfolio.vue'
import Login from './views/Login.vue' 
import Signup from './views/Signup.vue'
import Creator from './views/Creator.vue'
import InvalidPortfolio from './views/InvalidPortfolio.vue'
import PortConstruction from './views/PortConstruction.vue'
import CreatorBio from './components/CreatorBio.vue' 
import CreatorChooseTemplate from './components/CreatorChooseTemplate.vue' 
import CreatorProject from './components/CreatorProject.vue' 
import CreatorSkillsEdu from './components/CreatorSkillsEdu.vue' 
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
      name: 'user',
      component: User,
      beforeEnter: (to, from, next) => {
        // if (user authorized to see page) {
        store.dispatch('getPageJson', {to}).then(res => res ? next() : next('/invalid-user'))
        // }
        // else next('/login')
      }
    },
    {
      path: '/invalid-portfolio',
      name: 'invalidportfolio',
      component: InvalidPortfolio
    },
    {
      path: '/construction',
      name: 'underconstruction', 
      component: PortConstruction
    },
    {
      path: '/portfolio/:name',
      name: 'portfolio',
      component: Portfolio,
      beforeEnter: (to, from, next) => {
        // if (user authorized to see page) {
        store.dispatch('getPageJson', {to}).then(res => {
          if(!res) next('/invalid-portfolio')
          else if (store.getters.getPageHidden) next('/construction')
          else next()
        })
        // }
        // else next('/')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/portfolio-creator',
      name: 'creator',
      component: Creator,
      children: [
        { path: 'bio', component: CreatorBio },
        { path: 'skills', component: CreatorSkillsEdu },
        { path: 'projects', component: CreatorProject },
        { path: 'templates', component: CreatorChooseTemplate}
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})