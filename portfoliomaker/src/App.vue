<template>

  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Very Clever Name</span>
        <span class="font-weight-light">Ohhh Yeah</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <div class="text-xs-center">
    <v-menu transition="slide-x-transition">
      <v-btn 
      flat
      slot="activator">
        <span class="mr-2"><v-icon>widgets</v-icon></span>
      </v-btn>
    <v-list>
      <v-list-tile v-for="option in options" :key="option" :action="option.action" @click="">
        <router-link to="/">
        <v-list-tile-title v-text="option.action"></v-list-tile-title>
        </router-link>
        </v-list-tile>
      </v-list>
    </v-menu>
      </v-btn> 
      </div> 
      </v-toolbar>


    <v-content>
      <HelloWorld/>
    </v-content>
      <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <span>Colin Burns, Nate Becker, Nathan Golba, Mike Bixel</span>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      options: [
        {
            action: 'Login'
        },
        {
            action: 'Sign Up'
        }
      ]
    }
  }
}
</script>
