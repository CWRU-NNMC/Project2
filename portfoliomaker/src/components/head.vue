<template>
  <v-toolbar dark>
    <v-toolbar-title class="headline text-uppercase">
        <span>Our Clever Name</span>
        <span class="font-weight-light">Oh Yeah</span>
      </v-toolbar-title>
    <v-spacer></v-spacer>


  <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn
        slot="activator"
        light
      >
    <span class="mr-2"><v-icon>widgets</v-icon></span>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item"
          :title="item.title"
          @click="item"
        >
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>

</v-toolbar>
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
  }
}
</script>
