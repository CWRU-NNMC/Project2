<template>
	<v-app>
        <v-content>
            <v-container>
                <v-layout>
					<v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-img
								src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
								aspect-ratio="2.75">
							</v-img>

                        <v-container>
								<div class="tabs">
                                    <v-tabs
                                        centered
                                        color="blue lighten-2"
                                        dark
                                        icons-and-text>
                                        <v-tab>
                                        <span class="fontify">Sign Up - Basic Info</span>
                                        <v-icon>accessibility_new</v-icon>
                                        </v-tab>
                                            <v-tab-item>
                                                <v-card>
                                                    <v-card-text><genForm></genForm></v-card-text>
                                                </v-card>
                                            </v-tab-item>                           
                                    </v-tabs>
                                </div>
							</v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
	</v-app>
</template>

<script>
import genForm from '../components/SignUpForm'
  export default {
    data () {
      return {
        active: null
      }
    },
    components: {
        'genForm': genForm,
    }
  }
</script>

<style scoped>
    .tabs {
        text-align: center
    }
    .v-content {
        background-image: radial-gradient(gainsboro,skyblue,gainsboro)
    }
    .fontify {
        font-family: 'Orbitron', sans-serif;
        text-align: center
    }
</style>