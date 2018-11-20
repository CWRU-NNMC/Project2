<template>
<v-app>
	<v-content>
		<app-head></app-head>
		<br>
		<v-layout>
			<v-flex md6 sm12 offset-sm3>
				<v-card>
					<v-img
						src='https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
						aspect-ratio="2.75">
					</v-img>
						<v-container>							
						<v-tabs
							centered
							color="orange lighten-2"
							dark
							hide-slider
							icons-and-text>
						<v-tab>
							<span class="fontify">Add a Project</span>
								<v-icon>create</v-icon>
						</v-tab>
						<v-tab-item>
							<v-card>
								<v-container>
									<v-form v-if='!nextPage'>
										<v-text-field 
											type="textarea" 
											v-model='description' 
											id='description'
											label="Project Description">
										</v-text-field>
										<v-text-field 
											type="text" 
											v-model='repo' 
											id='repo'
											label="Add A Link to This Project's GitHub Repository">
										</v-text-field>
										<v-text-field 
											type="text" 
											v-model='live' 
											id='live'
											label="Link to the Deployed Project">
										</v-text-field>
									</v-form>
								<v-container>
									<label for="projectImg"><span class="fontify">Upload an image of your project. A 4:3 aspect ratio yields best results.</span>
										<input type="file" name='file' id="projectImg" ref="file" accept="image/*" v-on:change="processUpload()" />
										<v-btn @click='submitImage()'><span class="fontify">Add Image</span></v-btn>
									</label>
										<v-btn @click='storeData'><span class="fontify">Submit Project</span></v-btn>
											<div v-if='nextPage'>
												<v-btn @click='newProject'><span class="fontify">Add Another Project</span></v-btn> OR
												<router-link to='templates'><span class="fontify">Next: Choose A Template</span></router-link>
											</div>
								</v-container>			
								</v-container>
							</v-card>
						</v-tab-item>
						</v-tabs>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-content>
</v-app>
</template>


<script>
import head from '../components/Head'

  export default {
    data () {
      return {
        file: '',
        description: '',
        repo: '',
        live: '',
        stored: false,
        imageurl: ''              
      }
    },
    methods: {
        processUpload () {
            this.file = this.$refs.file.files[0]
            console.log('here')
        },
        submitImage() {
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('format', 'kfunjy1s') // auto formatting 
            console.log(this.file)
            this.$store.dispatch('uploadProjectImg', formData).then(() => this.imageurl = this.$store.getters.getImgUrl.data)
        },
        storeData() {        
          let projectsPayload = this.$store.state.portfolioBuildInfo.projects.concat({
            imageurl: this.imageurl,
            githuburl: this.repo,
            description: this.description,
            liveurl: this.live
          })
          console.log('payload', projectsPayload)
          this.$store.commit('buildPortfolio', {key: 'projects', value: projectsPayload})    
          this.stored = true
          console.log(this.$store.state)
        },
        newProject() {
          this.file= ''
          this.description= ''
          this.repo= ''
          this.live= ''
          this.stored= false
          this.imageurl= ''   
        }
    },
    computed: {
      nextPage() {
        return this.stored
      }
    },
	components: {
		'app-head': head
	}
}
</script>

<style scoped>
  .v-content {
	  background-image: radial-gradient(gainsboro,orange,gray,skyblue,gray)
  }
input {
  border: 1px solid black;
}
</style>
