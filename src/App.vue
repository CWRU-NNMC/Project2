<template>
  <div>
    <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import foot from './components/Foot'

export default {
  name: 'App',
  components: {
    'app-footer': foot
  }
}
</script>