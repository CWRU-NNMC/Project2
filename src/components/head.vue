<template>
<v-content>
    <v-toolbar dark>
        <v-toolbar-side-icon><v-icon @click="goTo('home')">home</v-icon></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="fontify">Bro, Do You Even Vue? </span>
                <span class="font-weight-light text-lowercase fontify"> ...Yeah, kinda</span>
            </v-toolbar-title>
<v-spacer></v-spacer>
            <v-btn light v-if='!user' @click="goTo('signup')"><span class="fontify">Sign Up</span></v-btn>
            <v-btn light v-if='!user' @click="goTo('login')"><span class="fontify">Login</span></v-btn>
            <v-btn light v-if='user' @click="logout()"><span class="fontify">Logout</span></v-btn>
        </v-toolbar>
</v-content>
</template>

<script>

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
  }
}
</script>

<style>
    .fontify {
        font-family: 'Orbitron', sans-serif;
    }
</style>

