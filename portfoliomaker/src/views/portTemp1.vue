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
                                        <h3 class="headline mb-1 wut">Links to Repo With Images?</h3>
                                    </div>
                                </v-card-title>
                                    <v-container>
                                        <p> Maybe this should be a carousel</p>
                                        <br>
                                        <p> ...Or Maybe a grid </p>
                                    </v-container>
                            </v-card>
                        </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</div>
</template>

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