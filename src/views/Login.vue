<template>
	<v-app>
        <v-content>
		<app-head></app-head>
            <v-container>
                <v-layout>
					<v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-img
								src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
								aspect-ratio="2.75">
							</v-img>
							<v-container>
								<div>
								<v-tabs
									centered
									color="orange lighten-2"
									dark
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify">Login</span>
									<v-icon>face</v-icon>
									</v-tab>
										<v-tab-item>
											<v-card>
												<v-container>
													<v-form class="form">
														<v-text-field 
															name= "username"
															v-model="input.username"
															label="Username"
															required>
														</v-text-field>
														<v-text-field
															name= "password"
															v-model="input.password"
															label="Password"
															:type="show ? 'text' : 'password'"
															class="input-group--focused"
															required>
														</v-text-field>
														<v-btn @click='login()' id="btn">Login</v-btn>
															<p v-if="errors.length">
																<b>Please correct the following error(s):</b>
																	<ul class = 'errors'>
																	<li v-for="error in errors">{{ error }}</li>
																	</ul>
															</p>
													</v-form>
												</v-container>
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
import head from '../components/Head'
    export default {
        name: 'Login',
        data() {
            return {		
				errors:[],		
                input: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            login() {
				this.errors = [];
				//check for username input
				if(!this.input.username) {
								this.errors.push("Username required.");
							} 
				//check for password input
				else if(!this.input.password) {
							 	this.errors.push("Password required.");
							}			
				//check if the credentials are valid and respond accordingly	
                if(this.input.username !== null && this.input.password !== null) {
							this.errors = [];
							var credentials = {
								userName: this.input.username,
								password: this.input.password
							}
							this.$store.dispatch('authUser', credentials)
							.then(() =>{
								this.$router.push({name: 'user'})
								})
							.catch(err => console.log(err))
						}
					}
                },
				components: {
					'app-head': head
				}
            }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
	.form {
		text-align: center
	}
	.errors {
		list-style-type: none
	}
	.v-content {
		background-image: radial-gradient(pink,orange,pink,skyblue,orange,gainsboro)
	}	
	#btn {
        font-family: 'Orbitron', sans-serif;
        text-align: center;
		background-image: radial-gradient(gainsboro,orange,gainsboro);
		color: white
    }
</style>


