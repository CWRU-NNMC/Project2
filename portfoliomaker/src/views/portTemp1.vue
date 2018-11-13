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
                                    class="img-circle elevation-7 mb-1"
                                    src="../assets/logo.png"
                                    alt="Pro Image">
                            </v-avatar>
                            <br>
                            <br>
                        <div class="headline">Your <span style="font-weight:bold">Name</span></div>
                            <br>
                            <v-layout pl-5>
                                <img 
                                    class="elevation-2"
                                    src="../assets/js.png"
                                    alt="js Image"
                                    height="35"
                                    width="35">
                                     <img 
                                    class="elevation-2"
                                    src="../assets/css.png"
                                    alt="css Image"
                                    height="35"
                                    width="35">
                                     <img 
                                    class="elevation-2"
                                    src="../assets/html.png"
                                    alt="html Image"
                                    height="35"
                                    width="35">
                                     <img 
                                    class="elevation-2"
                                    src="../assets/logo.png"
                                    alt="vue Image"
                                    height="35"
                                    width="35">
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
                                        <p>Please Hire Me</p>
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
        background-image: radial-gradient(green,gainsboro) ;
        color: white  
    }
    h3 {
        border-bottom: 2px dashed gainsboro
    }
    .card-title {
        background-image: radial-gradient(green,gainsboro)
    }
    .wut {
        color: white
    }
</style>