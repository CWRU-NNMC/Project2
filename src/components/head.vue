<template>
<v-content>
    <v-toolbar dark>
        <v-toolbar-side-icon><v-icon @click="goTo('home')">home</v-icon></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="lubbalubba">Bro, Do You Even Vue? </span>
                <span class="font-weight-light text-lowercase lubbalubba"> ...Yeah, kinda</span>
            </v-toolbar-title>
<v-spacer></v-spacer>
            <v-btn light @click="goTo('signUp')">Sign Up</v-btn>
            <v-btn light @click="goTo('login')">Login</v-btn>
        </v-toolbar>
</v-content>
</template>

<script>
//route button to login / sign up

export default {
  data () {
    return {
      items: [
        {
            title: 'Login'
        },
        {
            title: 'Sign Up'
        }
      ]
    }
  },
  methods: {
      goTo(item) {
          this.$router.push({ name: item})
      }    
  }
}
</script>

<style>
    .lubbalubba {
        font-family: 'Orbitron', sans-serif;
    }
</style>

