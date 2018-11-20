<template>
<div>
    <v-app light>
        <v-content>
            <v-container>
                <v-layout row wrap align-center>
                    <v-flex xs12 md4>
                        <div class="text-xs-center">
                            <v-avatar size="250px">
                                <img
                                    class="img-circle elevation-13 mb-1"
                                    :src="userImage"
                                    alt="Pro Image">
                            </v-avatar>
                            <br>
                            <br>
                        <div class="headline"><span class="text-uppercase" style="font-weight:bold"> {{ name }} </span></div>
                        <div class="headline"><span class="text-uppercase" style="font-weight:bold"> {{ location }} </span></div>
                            <br>
                            <v-layout pl-3>
                            <v-layout pl-5>
                            <v-layout pl-5>
                                <img 
                                    class="elevation-10"
                                    src="../assets/js.png"
                                    alt="js Image"
                                    height="35"
                                    width="35">
                                <img 
                                    class="elevation-10"
                                    src="../assets/css.png"
                                    alt="css Image"
                                    height="35"
                                    width="35">
                                <img 
                                    class="elevation-10"
                                    src="../assets/html.png"
                                    alt="html Image"
                                    height="35"
                                    width="35">
                                <img 
                                    class="elevation-10"
                                    src="../assets/logo.png"
                                    alt="vue Image"
                                    height="35"
                                    width="35">
                            </v-layout>
                            </v-layout>
                            </v-layout>
                        </div>
                    </v-flex>
                        <v-flex xs12 md4 pl-4>
                            <v-card>
                                <v-card-title class="card-title" primary-title> 
                                    <div>
                                        <h3 class="headline mb-1 wut">About Myself</h3>
                                    </div>
                                </v-card-title>
                                    <v-container>
                                    <span class="fontify colorize"><p>{{ bio }}</p></span>
                                    </v-container>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md4 pl-4>
                            <v-card>
                                <v-card-title class="card-title" primary-title> 
                                    <div>
                                        <h3 class="headline mb-1 wut">My Projects</h3>
                                    </div>
                                </v-card-title>
                                  <v-container>
                                        <v-layout>
                                          <v-carousel height="600" max="800">
                                            <v-carousel-item class="sizer" v-for="(project, i) in projects" :key="i" :src="project.imageurl" style="height:350px">
                                                <v-container>
                                                    <v-layout fluid>
                                                        <v-flex>
                                                            
                                                            <span class="subheading fontify colorize">{{ project.description }}</span>

                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-carousel-item>
                                        </v-carousel>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
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
        background-image: radial-gradient(gainsboro,MediumSpringGreen,gainsboro) ;
        color: white  
    }
    .card-title {
        background-image: linear-gradient(MediumSpringGreen,darkSlateGray,gainsboro)
    }
    .wut {
        color: white
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
    width: 100%;
    height: 50vh
}
</style>