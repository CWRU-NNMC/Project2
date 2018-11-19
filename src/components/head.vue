<template>
<v-content>
    <v-toolbar dark>
        <v-toolbar-side-icon><v-icon @click="goTo('home')">home</v-icon></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="lubbalubba">Bro, Do You Even Vue? </span>
                <span class="font-weight-light text-lowercase lubbalubba"> ...Yeah, kinda</span>
            </v-toolbar-title>
<v-spacer></v-spacer>
            <v-btn light v-if='!loggedIn' @click="goTo('signUp')">Sign Up</v-btn>
            <v-btn light v-if='!loggedIn' @click="goTo('login')">Login</v-btn>
            <v-btn light v-if='loggedIn' @click="logout()">Logout</v-btn>
        </v-toolbar>
</v-content>
</template>

<script>
//route button to login / sign up

export default {
  data () {
    return {
        user: this.$store.getters.getUser
    }
  },
  methods: {
      goTo(item) {
          this.$router.push({ name: item})
      },
      logout() {
          this.$store.commit('setUserName', '')
          this.user = this.$store.getters.getUser
          this.$store.commit('setToken', '')
          this.$router.push({name: 'login'})

      }    
  },
  computed: {
      loggedIn () {
          return this.$store.getters.getUser
      }
  }
}
</script>

<style>
    .lubbalubba {
        font-family: 'Orbitron', sans-serif;
    }
</style>

