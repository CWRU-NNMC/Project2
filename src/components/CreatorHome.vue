<template>
<v-app>
	<v-content>
  <div>
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
									<span class="fontify">Welcome to Portfolio Creator!</span>
									<v-icon>build</v-icon>
									</v-tab>								
									<v-tab-item>
										<v-card>
											<v-container>
												<p><span class="fontify">Here you can create your portfolio.</span></p>
    											<router-link to='basic'><span class="fontify"><v-btn>Begin!</v-btn></span></router-link>
											</v-container>
										</v-card>
									</v-tab-item>
								</v-tabs>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
    </div>
	</v-content>
</v-app>
</template>


<script>
import head from '../components/Head'

export default {
	components: {
		'app-head': Head
	}
}
</script>

<style scoped>
  .v-content {
	  background-image: radial-gradient(gainsboro,orange,gray,skyblue,gray)
  }
</style>