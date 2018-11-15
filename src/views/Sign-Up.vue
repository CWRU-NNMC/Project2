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
								<v-form class = 'form'>
									<v-text-field
                                        name= "username"
                                        label= "Choose a username"
                                    > 
									</v-text-field>
									<v-text-field
                                        name= "password"
                                        label= "Choose a password"
                                    >
									</v-text-field>
                                    <v-text-field
                                        name="email"
                                        label= "Enter your email address"
                                    > 
									</v-text-field>
									<v-text-field
                                        name= "image"
                                        label= "We need a way to have user upload their image"
                                    >
									</v-text-field>
                                    <v-text-field
                                        name= "dummy1"
                                        label= "Some other shit we need"
                                    > 
									</v-text-field>
									<v-text-field
                                        name= "dummy2"
                                        label= "More shit"
                                    >
									</v-text-field>
                                    <v-btn @click="">Sign Up </v-btn> 
								</v-form>
							</v-container>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
	</v-app>
</template>

<style scoped>
    .form {
        text-align: center
    }
    .v-content {
        background-image: radial-gradient(gainsboro,skyblue,gainsboro)
    }
</style>