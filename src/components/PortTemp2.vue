<template>
<v-app>
    <v-content>
        <v-layout>
            <v-flex md12 offset-sm5>
            <v-avatar size="250px">
                <img
                class="img-circle elevation-20 mb-1"
                src="../assets/logo.png"
                alt="Pro Image">
            </v-avatar>
            </v-flex>
        </v-layout>
        <br>
        <v-layout>
            <v-flex md12 offset-md5 pl-2>
                        <div class="headline"><span class="text-lowercase">FIRST NAME </span><span class="text-uppercase" style="font-weight:bold"> last name</span></div>
            </v-flex>
        </v-layout>
        <br>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-container>
								<div>
								<v-tabs
									centered
									color=""
									dark
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify">About Me</span>
									<v-icon>account_circle</v-icon>
								</v-tab>
                                <v-tab-item>
                                    <span class="fontify"><p>
                                        user.bio or something
                                    </p></span>
                                </v-tab-item>
                                </v-tabs>
                                </div>
                            </v-container>
                        </v-card>
                    </v-flex>
        </v-layout>
        <v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-container>
								<div>
								<v-tabs
									centered
									color=""
									dark
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify">My Projects</span>
									<v-icon>code</v-icon>
								</v-tab>
                                <v-tab-item>
                                    <v-container>
                                        <v-layout>
                                            <v-carousel
                                                height="600"
                                                max-width="800">
                                                <v-carousel-item
                                                    v-for="(item,i) in items"
                                                    :key="i"
                                                    :src="item.src">
                                                <v-container>
                                                    <v-layout align-center>
                                                        <v-flex>
                                                        <h3 class="display-3 fontify">{{ item.title }}</h3>
                                                        <span class="subheading fontify">{{ item.description }}</span>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                                </v-carousel-item>
                                            </v-carousel>
                                        </v-layout>
                                    </v-container>
                                </v-tab-item>
                                
                                </v-tabs>
                                </div>
                            </v-container>
                        </v-card>
                    </v-flex>
					<v-layout>
            <v-flex xs12 sm6 offset-sm3>
						<v-card>
							<v-container>
								<div>
								<v-tabs
									centered
									color=""
									dark
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify">My Technologies</span>
									<v-icon>desktop_mac</v-icon>
								</v-tab>
                                <v-tab-item>
                                    <span class="fontify"><p>
                                        user.technologies or whatevs
                                    </p></span>
                                </v-tab-item>
                                </v-tabs>
                                </div>
                            </v-container>
                        </v-card>
                    </v-flex>
        </v-layout>
                    <br>
                    <br>
        </v-layout>
    </v-content>
</v-app>
</template>

<script>
    export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            title: 'one',
            description: 'one'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: 'two',
            description: 'two'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: 'three',
            description: 'three'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            title: 'four',
            description: 'four'
          }
        ]
      }
    }
}
</script>

<style scoped>
.v-content {
    background-image: radial-gradient(gainsboro,mediumspringgreen,gainsboro);
}
.fontify {
    font-family: 'Orbitron', sans-serif;
    text-align: center
}
</style>