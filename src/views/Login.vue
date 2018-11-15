<template>
	<v-app>
		<v-content>
			<v-container>
				<v-layout>
					<v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-img
								src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
								aspect-ratio="2.75">
							</v-img>
						<v-card-title primary-title> 
							<div>
								<h3 class="lubbalubba mb-0">Login</h3>
							</div>
						</v-card-title>
							<v-container>
								<v-form class = 'form'>
									<v-text-field 
										name= "username"
										v-model="input.username"
										:counter="16"
										label="Username"
										required>
									</v-text-field>
									<v-text-field
										name= "password"
										v-model="input.password"
										:counter="16"
										label="Password"
										required>
									</v-text-field>
                                    <v-btn @click='login()'>Login</v-btn>
									<p v-if="errors.length">
    									<b>Please correct the following error(s):</b>
										<ul class = 'errors'>
										<li v-for="error in errors">{{ error }}</li>
										</ul>
  									</p>
								</v-form>
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
        name: 'Login',
        data() {
            return {		
				errors:[],		
                input: {
                    username: null,
                    password: null,
                }
            }
        },
        methods: {
            login() {
				this.errors = [];
				if(!this.input.username) {
								this.errors.push("Username required.");
								this.input.username = null;
								this.$emit("authenticated", false);
							} 
				else if(!this.input.password) {
							 	this.errors.push("Password required.");
								this.input.password = null;
								this.$emit("authenticated", false);
							}				
                if(this.input.username !== null && this.input.password !== null) {
							this.errors = [];
							if(this.input.username == this.$parent.Account.username && this.input.password == this.$parent.Account.password) {								
								this.$emit("authenticated", true);
								this.$router.replace({ name: "secure" });
							}
							if(this.input.username != this.$parent.Account.username ) {
								this.errors.push("That username/password is invalid");
								this.input.username = null;
								this.input.password = null;
								this.$emit("authenticated", false);
							}
							else if (this.input.username = this.$parent.Account.username && this.input.password != this.$parent.Account.password ) {
								this.errors.push("Invalid password");
								this.input.username = null;
								this.input.password = null;
								this.$emit("authenticated", false);
							}

						}
					}
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
		text-align: center;
	}

	.errors {
		list-style-type: none;
	}

	.v-content {
		background-image: radial-gradient(gainsboro,orange,gainsboro)
	}
</style>