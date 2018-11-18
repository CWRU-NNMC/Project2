<template>
  <div>
    <app-header></app-header>
    <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
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
  components: {
    'app-header': head,
    'app-footer': foot,
    'app-home': home,
    'app-user': user,
    'app-login': login,
    'app-port1': portTemp1,
    'app-port2': portTemp2
  }
}
</script>



