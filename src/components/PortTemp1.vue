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
                                    src="../assets/logo.png"
                                    alt="Pro Image">
                            </v-avatar>
                            <br>
                            <br>
                        <div class="headline"><span class="text-lowercase">LOWER </span><span class="text-uppercase" style="font-weight:bold"> upper</span></div>
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
                                        <p>Please</p>
                                        <br>
                                        <p>Hire</p>
                                        <br>
                                        <p>Me</p>
                                        <br>
                                        <p>I</p>
                                        <br>
                                        <p>Am</p>
                                        <br>
                                        <p>Poor</p>
                                        <br>
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
                                            <v-carousel
                                                height="600"
                                                max-width="800">
                                                <v-carousel-item
                                                    v-for="(project, i) in projects"
                                                    :key="i"
                                                    :src="project.imageurl">
                                                <v-container>
                                                    <v-layout align-center>
                                                        <v-flex>
                                                        <h3 class="display-3 fontify">{{ project.title }}</h3>
                                                        <span class="subheading fontify">{{ project.description }}</span>
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
    data () {
      return {
        name: '',
        bio: '',
        location: '',
        userImage: '',
        projects: [],
      }
    },
    beforeRouteEnter (to, from, next) {
        let dataJson = this.$store.getters.getPageInfo
        this.fillData(dataJson)
    },
    methods: {
        fillData(({userInfo, portfolioInfo})) {
            this.name = `${userInfo.firstname} ${userInfo.lastname}`
            this.bio = portfolioInfo[0].portfolioDescription
            this.location = userInfo.location
            this.userImage = userImage
              
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
</style>