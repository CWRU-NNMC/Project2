<template>
<v-app>
    <v-app>
        <v-content>
            <v-container>
                <v-layout>
					<v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-img
								src="http://youthvillage.co.zw/wp-content/uploads/site-foreman.jpg"
								aspect-ratio="2.75">
							</v-img>
                            <v-container>
								<div>
								<v-tabs
									centered
									color="lime"
									dark
									hide-slider
									icons-and-text>
								<v-tabs-slider color="white"></v-tabs-slider>
								<v-tab>
									<span class="fontify">Under Construction</span>
									<v-icon>build</v-icon>
									</v-tab>
										<v-tab-item>
											<v-card>
												<v-container>
													<h1><span class="fontify">Sorry! This Portfolio is currently under construction!</span></h1>
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
</v-app>
</template>

<style scoped>
	.v-content {
		background-image: radial-gradient(gainsboro,greenyellow,gainsboro)
	}
	.fontify {
		font-family: 'Orbitron', sans-serif;
	}
</style>