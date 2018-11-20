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
													<v-form ref="form" class="form">
														<v-text-field 
															name= "username"
															v-model="username"
															label="Username"
															counter
															:rules="rules">
														</v-text-field>
														<v-text-field
															name= "password"
															:append-icon="show1 ? 'visibility_off' : 'visibility'"
															v-model="password"
															label="Password"
															:rules="rules"
															hint="Between 4 and 45 Characters"
															:type="show1 ? 'text' : 'password'"
															class="input-group--focused"
															counter
															@click:append="show1 = !show1">
														</v-text-field>
														<v-btn @click='submit' :disabled="!valid" id="btn">Login</v-btn>
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
import Head from '../components/Head'
    export default {
        name: 'Login',
        data() {
            return {	
				username: '',
				password: '',	
				valid: true,
				show1: false,
				rules: [
					data => !!data || 'Required.',
					data => data.length < 4 ? 'Too few characters.' : true,
					data => data.length > 45 ? 'Too many characters.' : true
				],	
            }
		},
        methods: {
			submit() {
				if(this.$refs.form.validate()){
					const credentials = {
					userName: this.username,
					password: this.password
							}
					this.$store.dispatch('authUser', credentials)
						.then(() => {
							this.$store.state.userToken ? this.$router.push({name: 'user'}) : this.password = ''
						})
				}
				
			},
		},
		components: {
			'app-head': Head
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


