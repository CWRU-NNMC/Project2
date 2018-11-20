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
                                                            <v-text-field name="newName" label="Pick a Username" v-model='userName'>
                                                            </v-text-field>
                                                            <v-text-field name="newPassword" label="Create a Password" v-model='password'>
                                                            </v-text-field>
                                                            <v-text-field name="newEmail" label="Enter your email address" v-model='email'>
                                                            </v-text-field>
                                                            <v-text-field name="firstname" label="First Name" v-model='firstname'>
                                                            </v-text-field>
                                                            <v-text-field name="lastname" label="Last Name" v-model='lastname'>
                                                            </v-text-field>
                                                            <v-text-field name="linkedin" label="LinkedIn Profile URL" v-model='linkedin'>
                                                            </v-text-field>
                                                            <v-text-field name="usergithuburl" label="GitHub URL" v-model='usergithuburl'>
                                                            </v-text-field>
                                                            <v-textarea name="userbio" label="Tell Us About Yourself" v-model='userbio'>
                                                            </v-textarea>
                                                            <v-icon v-if='showChooseButton'>attachment</v-icon>
                                                            <label for="userImg"> Profile Image <span v-if='showImageSuccess'>Added Successfully</span>
                                                            <input v-if='showChooseButton' type="file" name="file" id="userImg" ref="file"
                                                                accept="image/*" v-on:change="processUpload()" />

                                                            </label>
                                                            <v-btn @click='submitImage' v-if='showAddImageButton' :disabled='processing'>Add Image</v-btn>
                                                            <v-btn @click="storeData" id="btn">Sign Up</v-btn>
                                                            <v-text v-if='showError'> {{ showError }} </v-text>
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
    import Head from '../components/Head'
    export default {
        data() {
            return {
                active: null,
                fileChosen: false,
                fileAdded: false,
                process: false,
                submitError: false,
                file: '',
                userName: '',
                password: '',
                email: '' ,
                firstname: '' ,
                lastname: '' ,
                linkedin: '' ,
                usergithuburl: '' ,
                imageurl: '',
                userbio: ''
            }
        },
        methods: {
            processUpload() {
                this.file = this.$refs.file.files[0]
                this.fileChosen = true
            },
            submitImage() {
                this.process = true
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('format', 'n9x5iuqt') // auto formatting 
                this.$store.dispatch('uploadUserImg', formData)
                    .then(res => this.imageurl = res.data)
                    .then(()=> this.fileAdded = true)
                    .catch(err => this.process = false)
            },
            storeData() {
                const buildInfo = {
                    userName: this.userName,
                    email: this.email,
                    pw: this.password,
                    preferences: {"a":"b"},
                    userImage: this.imageurl,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    linkedin: this.linkedin,
                    usergithuburl: this.usergithuburl,
                    userbio: this.userbio
                    }
                this.$store.dispatch('checkNameAvailable', {name: this.userName, pageType: 'user'})
                    .then(() => {

                        this.nameChecked = true
                        return this.$store.getters.getNameAvailable
                    })
                    .then(avail => {
                        if (avail) {
                            return this.$store.dispatch('addUserOrPort', {name: this.userName, data: buildInfo, pageType: 'user'})
                        }
                        this.submitError = 'User not added, name not available.'
                        return false
                    })
                    .then(signedup => {
                        if (signedup) {
                            this.$router.push({name: 'login'})
                        }
                    })
            }
        },
        components: {
            'app-head': Head
        },
        computed: {
            showChooseButton() {
                return !this.fileChosen
            },
            showAddImageButton() {
                return this.fileChosen && !this.fileAdded
            },
            showImageSuccess() {
                return this.fileAdded
            },
            processing() {
                return this.process
            },
            showError() {
                return this.submitError
            }
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