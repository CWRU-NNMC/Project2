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
                                                                    label="Add an image">
                                                                <v-btn><v-icon>assignment_ind</v-icon></v-btn>
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
    data: () => ({
        title: "Image Upload",
        dialog: false,
		imageName: '',
		imageUrl: '',
		imageFile: ''
    }),

    methods: {
        pickFile () {
            this.$refs.image.click ()
        },
		
		onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}
    }

}






//   export default {
//     data () {
//       return {
//         active: null
//       }
//     }
//   }
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