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
import CreatorBasic from './components/CreatorBasic.vue' 
import CreatorChooseTemplate from './components/CreatorChooseTemplate.vue' 
import CreatorProject from './components/CreatorProject.vue' 
import CreatorSkillsEdu from './components/CreatorSkillsEdu.vue' 
import CreatorHome from './components/CreatorHome.vue'
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
      path: '/user',
      name: 'user',
      component: User,
      beforeEnter: (to, from, next) => {
        if (store.state.userToken) store.dispatch('getUserPage', {userName: store.state.userName, token: store.state.userToken}).then(() => next())
        else next('/login')
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
        store.dispatch('getPortfolioJson', {to}).then(() => {
          if(!store.getters.getPageInfo.portfolioInfo) next('/invalid-portfolio')
          if (store.getters.getPageInfo.portfolioInfo[0].public) next('/construction')
          else next()
        })
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter : (to, from, next) => {
        store.state.userToken ? next('/user') : next()
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/portfolio-creator',
      component: Creator,
      children: [
        { path: 'basic', component: CreatorBasic },
        { path: 'skills', component: CreatorSkillsEdu },
        { path: 'projects', component: CreatorProject },
        { path: 'templates', component: CreatorChooseTemplate},
        { path: '', name: 'creator', component: CreatorHome }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
