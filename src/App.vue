<template>
  <div>
    <app-header></app-header>
    <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
    <app-footer></app-footer>
  </div>
</template>

<script>
import head from './components/Head'
import foot from './components/Foot'

export default {
  name: 'App',
  data() {
            return {
                authenticated: false,
                Account: {
                    username: "TwoCats",
                    password: "password"
                }
            }
        },
  mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "home" });
            }
        },
  methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        },            
  components: {
    'app-header': head,
    'app-footer': foot
  }
}
</script>