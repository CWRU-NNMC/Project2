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
										<v-form>
											<v-layout v-if='!nextPage'>
												<v-flex md6 sm12 offset-sm3 pl-3>
													<h2><span class="fontify">Choose Your Template</span></h2>
														<label for="temp1"> Template 1
															<input type="radio" id="temp1" value="1" v-model="template">
														</label>
														<label for="temp2"> Template 2
															<input type="radio" id="temp2" value="2" v-model="template">

														</label>					

													<v-btn @click='storeData'><span class="fontify">Submit Template</span></v-btn>
												</v-flex>
											</v-layout>
										</v-form>
											<div v-if='nextPage'>
												<span class="fontify"><v-btn @click='finishPortfolio'>Finalize And Submit</v-btn>
												<p>This May Take A Few Seconds...</p></span>
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
import Head from '../components/Head'
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
    },
  },
  methods: {
    storeData() {        
          this.$store.commit('buildPortfolio', {key: 'template', value: this.template})    
          this.stored = true
        },
    finishPortfolio() {
      let { portfolioName, technologies, description, config, template } = this.$store.state.portfolioBuildInfo
      let { userName, userToken, usersid } = this.$store.state
      let buildInfo = {
        technologies,
        portfolioName,
        description,
        config,
				userName,
				template,
        token: userToken,
        usersid
      }
      this.$store.dispatch('addUserOrPort', {name: portfolioName, data: buildInfo, pageType: 'portfolio'})
        .then(portAdded => {
          if (!portAdded) throw new Error('portfolio not added') 
          let { portfolioid, projects } = this.$store.state.portfolioBuildInfo
          Promise.all(projects.map(proj => {
            return this.$store.dispatch('addProject', {name: 'add', data: {
              ...proj,
              usersid,
              portfolioid,
              userName,
              token: userToken
            }})
          })).then(() => this.$router.push({ name: 'user' }))
        })
    }
  },
  components: {
	  'app-head': Head
  }
}
</script>

<style>
  .v-content {
	  background-image: radial-gradient(gainsboro,orange,gray,skyblue,gray)
  }
</style>
