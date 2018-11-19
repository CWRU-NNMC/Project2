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
							<span class="fontify">Choose a Template</span>
								<v-icon>file_copy</v-icon>
						</v-tab>
							<v-tab-item>
								<v-card>
									<v-container>
										<v-form v-if='!nextPage'>
											<v-layout>
												<v-flex md6 sm12 offset-sm3 pl-3>
													<h2><span class="fontify">Choose Your Template</span></h2>
														<label for="temp1"> Template 1
															<input type="radio" id="temp1" value="1" v-model="template">
														</label>
														<label for="temp2"> Template 2
															<input type="radio" id="temp2" value="2" v-model="template">
														</label>
														<label for="temp3"> Template 3
															<input type="radio" id="temp3" value="3" v-model="template">
														</label>						
													<v-btn @click='storeData'><span class="fontify">Submit Template</span></v-btn>
												</v-flex>
											</v-layout>
										</v-form>
											<div v-if='nextPage'>
												<v-btn @click='finishPortfolio'>Finalize And Submit</v-btn>
												<p>This May Take A Few Seconds...</p>
											</div>							
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
import head from '../components/head'
export default {
  data () {
    return {
      template: 0,
      stored: false
    }
  },
  computed: {
    nextPage() {
      return this.stored
    }
  },
  methods: {
    storeData() {        
          this.$store.commit('buildPortfolio', {key: 'template', value: this.template})    
          this.stored = true
          console.log(this.$store.state)
        },
    finishPortfolio() {
      let { portfolioName, technologies, description, config } = this.$store.state.portfolioBuildInfo
      let { userName, userToken, usersid } = this.$store.state
      let buildInfo = {
        technologies,
        portfolioName,
        description,
        config,
        userName,
        token: userToken,
        usersid
      }
      // console.log(portfolioName)
      let buildInfo2 = {
        technologies: ["a", "b"],
        portfolioName: "jazzy",
        description: "a",
        config: {"a": "b"},
        userName: "nate",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibmF0ZSIsImlhdCI6MTU0MjY0NTgzNiwiZXhwIjoxNTQyODE4NjM2LCJpc3MiOiJsb2NhbGhvc3QifQ.14dVe0HChNvhLFZ6faW8J06SWhvr1K0cN3c-UwD8XEo",
        usersid: "1"
      }
      this.$store.dispatch('addUserOrPort', {name: portfolioName, data: buildInfo, pageType: 'portfolio'})
        .then(portAdded => {
          if (!portAdded) throw new Error('portfolio not added') 
          let { portfolioid, projects } = this.$store.state.portfolioBuildInfo
          Promise.all(projects.map(proj => {
            return this.$store.dispatch('addProject', {name: 'asdf', data: {
              ...proj,
              usersid,
              portfolioid,
              userName,
              token: userToken
            }})
          })).then(x => console.log(x))
        })
    }
  },
  components: {
	  'app-head': head
  }
}
</script>

<style>
  .v-content {
	  background-image: radial-gradient(gainsboro,orange,gray,skyblue,gray)
  }
</style>
