<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import head from './components/head'
import foot from './components/foot'

import home from './views/Home'
import user from './views/User'
import login from './views/Login'
import signIn from './views/Sign-Up'
import portTemp1 from './views/portTemp1'
import portTemp2 from './views/portTemp2'


export default {
  name: 'App',
  data() {
          return {
              
          }      
        },         
  components: {
    'app-header': head,
    'app-footer': foot,
  }
}
</script>



