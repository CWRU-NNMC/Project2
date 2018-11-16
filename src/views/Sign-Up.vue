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
                                        hide-slider
                                        icons-and-text>
                                        <v-tab>
                                        <span class="fontify">Sign Up - Basic Info</span>
                                        <v-icon>accessibility_new</v-icon>
                                        </v-tab>
                                            <v-tab-item>
                                                <v-card>
                                                    <v-card-text>
                                                        <v-container>
                                                            <v-form class = 'form'>
                                                                <v-text-field 
                                                                    name= "newName"
                                                                    label="Pick a Username">
                                                                </v-text-field>
                                                                <v-text-field
                                                                    name= "newPassword"
                                                                    label="Create a Password">
                                                                </v-text-field>
                                                                <v-text-field 
                                                                    name= "newEmail"
                                                                    label="Enter your email address">
                                                                </v-text-field>
                                                                <v-text-field
                                                                    name= "image"
                                                                    label="Maybe upload your image here too idk Max totally has a video">
                                                                </v-text-field>
                                                                    <v-btn @click='' id="btn">Sign Up</v-btn>
                                                            </v-form>
                                                        </v-container>
                                                    </v-card-text>
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
  export default {
    data () {
      return {
        active: null
      }
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
    #btn {
        font-family: 'Orbitron', sans-serif;
        text-align: center;
		background-image: radial-gradient(gainsboro,skyblue,gainsboro);
		color: white
    }
</style>