<template>
<v-app>
	<v-content>
		<app-head></app-head>
		<br>
			<v-layout>
				<v-flex md6 sm12 offset-sm3>
					<v-card>
						<v-container>
							<v-tabs
									centered
									color="orange lighten-2"
									dark
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify">Which Technologies Would You Like To Highlight?</span>
									<v-icon>desktop_mac</v-icon>
									</v-tab>
									<v-tab-item>
									<v-card>
										<v-container>
											<v-flex offset-sm2>
												<form v-if='!nextPage'> 
											<div v-for='tech in techList'>
												<label :for="tech">
												<input type="checkbox" :id="tech" :value="tech" v-model='techs'><span class="fontify"> {{ tech }} </span>
												</label>
											</div>
											<div>
												<v-btn  @click='storeData'><span class="fontify">Submit</span></v-btn>
											</div>
											</form>
											<div v-if='nextPage'>
											<span class="fontify"><h2>Stored!</h2>
											<router-link to='projects'>Next: Add A Project</router-link></span>   
											</div>
											</v-flex>
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
      techs: [],
      techList: ['Node', 'PHP', 'SASS', 'Bootstrap', 'React', 'Angular', 'Vue', 'MySQL', 'MongoDB'],
      stored: false
    }
  },
  methods: {
    storeData() {        
            this.$store.commit('buildPortfolio', {key: 'technologies', value: this.techs})    
            this.stored = true
            this.process = false
    }
  },
  computed: {
    nextPage() {
      return this.stored
    }
  }, 
  components: {
	  'app-head': Head
  }
}
</script>

<style>
  .fontify {
	  font-family: 'Orbitron', sans-serif;
  }
</style>