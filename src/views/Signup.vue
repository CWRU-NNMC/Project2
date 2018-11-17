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
						<v-card-title primary-title> 
							<div>
								<h3 class="mb-0">Sign Up</h3>
							</div>
						</v-card-title>
                        <v-container>
								<div>
                                    <v-tabs
                                        centered
                                        color="blue lighten-2"
                                        dark
                                        icons-and-text
                                    >
                                        <v-tabs-slider color="yellow"></v-tabs-slider>

                                        <v-tab href="#tab-1">
                                        Basic Information
                                        <v-icon>accessibility_new</v-icon>
                                        </v-tab>

                                        <v-tab href="#tab-2">
                                        GitHub
                                        <v-icon>swap_horiz</v-icon>
                                        </v-tab>

                                        <v-tab href="#tab-3">
                                        Pick a Style
                                        <v-icon>opacity</v-icon>
                                        </v-tab>

                                        <v-tab-item
                                        v-for="i in 3"
                                        :id="'tab-' + i"
                                        :key="i"
                                        >
                                        <v-card flat>
                                            <v-card-text></v-card-text>
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
        active: null,
        forms: [
            {
                text: "General Info"
            },
            {
                text: "GitHub"
            },
            {
                text: "Choose a Style"
            }
        ] 
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>

<style scoped>
    .form {
        text-align: center
    }
    .v-content {
        background-image: radial-gradient(gainsboro,skyblue,gainsboro)
    }
</style>