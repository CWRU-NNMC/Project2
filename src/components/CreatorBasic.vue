<template>
<div>
	<v-content>
	<app-head></app-head>
		<v-layout>
			<v-container>
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
									<span class="fontify">Basic Portfolio Info</span>
									<v-icon>info</v-icon>
									</v-tab>
									<v-tab-item>
											<v-card>
												<v-container>
												<v-form v-if='!nextPage'>
													<v-text-field 
													label="Portfolio Name"
													type="text"
													id="portfolioName"
													v-model='portfolioName'
													@click='nameChecked = false'>
													</v-text-field>
												<div>     
												<!-- <v-btn @click='checkAvail'>Check Availability</v-btn> -->
												<!-- <i v-if="greenCheck">AVAILABLE!!</i> -->
												<i v-if="redCheck">NOT AVAILABLE!!</i>
												</div>    
													<v-text-field
														label="Description"
														type="text"
														id="description"
														v-model="description">
													</v-text-field>
												</v-form>
												</v-container>
											</v-card>
									</v-tab-item>        
                  </v-tabs>
                  <div v-if='nextPage'>        
											<span class="fontify"><h3>Stored!</h3></span>
											<router-link v-if='nextPage' to='skills'><span class="fontify"><v-btn>Next: Skills And Technologies</v-btn></span></router-link>
       									</div>
								    
           							<v-btn v-if='!nextPage' @click='storeData' :disabled='processing'><span class="fontify">Submit</span></v-btn> 
						</v-container>
					</v-card>
				</v-flex>
			</v-container>
		</v-layout>
	</v-content>
</div>
</template>


<script>
import Head from '../components/Head'
export default {
  data() {
    return {
      portfolioName: '',
      description: '',
      nameChecked: false,
      stored: false,
      process: false

    }
  },
  methods: {
    // checkAvail() {
    //   console.log(this.portfolioName)
    //   this.nameChecked = true
    //   this.$store.dispatch('checkNameAvailable', {name: this.portfolioName, pageType: 'portfolio'})
    //   .then(() => store.getters.getNameAvailable)
    // },
    storeData() {      
      this.process = true
      this.$store.dispatch('checkNameAvailable', {name: this.portfolioName, pageType: 'portfolio'})
        .then(() => {
          this.nameChecked = true
          return this.$store.getters.getNameAvailable
          })
      // .then(x => console.log(x))
        .then((avail) => {
          console.log(avail)
          if (avail) {
            this.$store.commit('buildPortfolio', {key: 'portfolioName', value: this.portfolioName})
            this.$store.commit('buildPortfolio', {key: 'description', value: this.description})           
            this.stored = true
            this.process = false
          }
          this.process = false
        })
    }
  },
  computed: {
    // avail() {
    //   return this.$store.getters.getNameAvailable
    // },
    // greenCheck() {
    //   return this.nameChecked && this.$store.getters.getNameAvailable
    // },
    redCheck() {
      return this.nameChecked && !this.$store.getters.getNameAvailable
    },
    nextPage() {
      return this.stored
    },
    processing() {
      return this.process
    }
  },
  components: {
    'app-head': Head
  }    
}
</script>

<style scoped>
  div {
    text-align: center;
  }
  .fontify {
	  font-family: 'Orbitron', sans-serif;
  }
  .v-content {
	  background-image: radial-gradient(gainsboro,orange,gray,skyblue,gray)
  }
</style>
