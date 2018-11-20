<template>
<v-app>
    <v-content>
        <v-layout>
            <v-flex md12 offset-sm5>
            <v-avatar size="250px">
                <img
                class="img-circle elevation-20 mb-1"
                :src="userImage"
                alt="Pro Image">
            </v-avatar>
            </v-flex>
        </v-layout>
        <br>
        <v-layout>
            <v-flex md12 offset-md5 pl-2>
                        <div class="headline"><span class="text-uppercase fontify" style="font-weight:bold"> {{ name }} </span></div>
                        <div class="headline"><span class="text-uppercase fontify" style="font-weight:bold"> {{ location }} </span></div>
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
                                    <span class="fontify colorize"><p>
                                        {{ bio }}
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
                                                height="800"
                                                max="800">
                                                <v-carousel-item class ="sizer" v-for="(project, i) in projects" :key="i" :src="project.imageurl">
                                                <v-container>
                                                    <v-layout align-center>
                                                        <v-flex>
                                                            <v-subheader class="fontify colorize">{{ project.description }}</v-subheader>
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
                    <br>
                    <br>
        </v-layout>
    </v-content>
</v-app>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                bio: '',
                location: '',
                userImage: '',
                projects: [],
            }
        },
        created() {
            let dataJson = this.$store.getters.getPageInfo
            this.fillData(dataJson)
        },
        methods: {
            fillData({userInfo, portfolioInfo}) {
                let user = userInfo[0]
                this.name = `${user.firstname} ${user.lastname}`
                this.bio = portfolioInfo[0].portfolioDescription
                this.location = user.location
                this.userImage = user.userimage
                this.projects.push(...portfolioInfo)
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
.colorize {
    color: black;
    font-weight: bolder
}
.sizer {
    width: auto;
    height: auto
}
</style>