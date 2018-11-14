<template>
<v-content>
    <v-toolbar dark>
        <v-toolbar-side-icon><v-icon>home</v-icon></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="lubbalubba">Bro, Do You Even Vue? </span>
                <span class="font-weight-light text-lowercase lubbalubba"> ...Yeah, kinda</span>
            </v-toolbar-title>
<v-spacer></v-spacer>
            <div class="text-xs-center">
                <v-menu offset-y>
                    <v-btn
                    slot="activator"
                    light>
                        <span class="mr-2"><v-icon>widgets</v-icon></span>
                    </v-btn>
                    <v-list>
                        <v-list-tile
                            v-for="item in items"
                            :key="item"
                            :title="item.title"
                            @click="goTo(item.title)">
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>
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
          if(item === 'Login') {
              this.$router.replace({ name: 'login'})
          }else{
              this.$router.replace({ name: 'signUp'})
          }      
      }
  }
}
</script>

<style>
    .lubbalubba {
        font-family: 'Orbitron', sans-serif;
    }
</style>

