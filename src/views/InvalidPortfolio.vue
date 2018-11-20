<template>
<v-app>
    <v-content>
        <app-head></app-head>
            <v-container>
                <v-layout>
					<v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-img
								src="http://www.helpclic.net/img/logo/annuler.png"
								height="391"
                                width="391"
                                aspect-ratio="2.75">
							</v-img>
                            <v-container>
								<div>
								<v-tabs
									centered
									color="red"
									dark
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify">Access Denied</span>
									<v-icon>not_interested</v-icon>
									</v-tab>
										<v-tab-item>
											<v-card>
												<v-container>
													<h1><span class="fontify">Sorry! You don't have access to this page!</span></h1>
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
    import head from '../components/Head'

    export default {
    components: {
        'app-head': Head
    }
}
</script>

<style scoped>
	.v-content {
		background-image: radial-gradient(gainsboro,orangered,gainsboro)
	}
	.fontify {
		font-family: 'Orbitron', sans-serif;
	}
</style>