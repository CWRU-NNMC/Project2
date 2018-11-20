<template>
    <v-app>
        <v-content>
            <app-head></app-head>
            <v-container>
                <v-layout>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card>
                            <v-img src='https://cdn.vuetifyjs.com/images/carousel/sky.jpg' aspect-ratio="2.75">
                            </v-img>
                            <v-container>
                                <div class="tabs">
                                    <v-tabs centered color="blue lighten-2" dark hide-slider icons-and-text>
                                        <v-tab>
                                            <span class="fontify">Sign Up</span>
                                            <v-icon>accessibility_new</v-icon>
                                        </v-tab>
                                        <v-tab-item>
                                            <v-card>
                                                <v-card-text>
                                                    <v-container>
                                                        <v-form class='form'>
                                                            <v-text-field name="newName" label="Pick a Username">
                                                            </v-text-field>
                                                            <v-text-field name="newPassword" label="Create a Password">
                                                            </v-text-field>
                                                            <v-text-field name="newEmail" label="Enter your email address">
                                                            </v-text-field>
                                                            <v-icon>attachment</v-icon>
                                                            <input type="file" name="file" id="userImg" ref="file"
                                                                accept="image/*" v-on:change="processUpload()" />
                                                            <v-btn @click="goTo('login')" id="btn">Sign Up</v-btn>
                                                        </v-form>
                                                    </v-container>
                                                </v-card-text>
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
        data() {
            return {
                active: null,
                file: ''
            }
        },
        methods: {
            processUpload() {
                this.file = this.$refs.file.files[0]
            },
            submitImage() {
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('format', 'n9x5iuqt') // auto formatting 
                this.$store.dispatch('uploadUserImg', formData).then(() => {})
            }
        },
        components: {
            'app-head': head
        }
    }
</script>

<style scoped>
    .tabs {
        text-align: center
    }

    .v-content {
        background-image: radial-gradient(gainsboro, skyblue, gainsboro, khaki, skyblue)
    }

    .fontify {
        font-family: 'Orbitron', sans-serif;
        text-align: center
    }
    
    #btn {
        font-family: 'Orbitron', sans-serif;
        text-align: center;
        background-image: radial-gradient(gainsboro, skyblue, gainsboro);
        color: white
    }
</style>