<template>
<v-content>
    <v-toolbar dark>
        <v-toolbar-side-icon><v-icon>home</v-icon></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span>Bro, Do You Even Vue?</span>
                <span class="font-weight-light text-lowercase">Yeah, kinda</span>
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
                            @click="item">
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
  }
}
</script>
<style scoped>

</style>
