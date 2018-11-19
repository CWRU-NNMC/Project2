<template>
    <div>
        <v-app>
            <v-content>
                <v-container>
                    <label>Test
                        <input type="file" name='file' id="projectImg" ref="file" accept="image/*" v-on:change="processUpload()" />
                    </label>
                    <v-btn v-on:click="submitProject()">Submit</v-btn>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                file: '',
                description: '',
                repo: '',
                live: ''
            }
        },
        methods: {
            processUpload () {
                this.file = this.$refs.file.files[0]
            },
            submitProject() {
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('format', 'kfunjy1s') // auto formatting 
                this.$store.dispatch('uploadProjectImg', formData).then(() => console.log (this.$store.getters.getImgUrl))
            }
        }
    }
</script>