<template>
  <div>
    <v-app>
      <v-content>
        <form v-if='!nextPage'>
          <h2>Add A Project</h2>
          <label for="description"> Description of your project.
            <input type="textarea" v-model='description' id='description'>
          </label>
          <label for="repo"> Link to this project's GitHub repository.
            <input type="text" v-model='repo' id='repo'>
          </label>
          <label for="live"> Link to this deployed project.
            <input type="text" v-model='live' id='live'>
          </label>
          <v-container>
            <label for="projectImg"> Upload an image of your project. A 4:3 aspect ratio yields best results.
              <input type="file" name='file' id="projectImg" ref="file" accept="image/*" v-on:change="processUpload()" />
              <v-btn @click='submitImage()'>Add Image</v-btn>
            </label>
          </v-container>
          <v-btn @click='storeData'>Submit Project</v-btn>
        </form>

        <div v-if='nextPage'>
          <v-btn @click='newProject'>Add Another Project</v-btn> OR

          <router-link to='templates'>Next: Choose A Template</router-link>

        </div>
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
        live: '',
        stored: false,
        imageurl: ''              
      }
    },
    methods: {
        processUpload () {
            this.file = this.$refs.file.files[0]
            console.log('here')
        },
        submitImage() {
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('format', 'kfunjy1s') // auto formatting 
            console.log(this.file)
            this.$store.dispatch('uploadProjectImg', formData).then(() => this.imageurl = this.$store.getters.getImgUrl.data)
        },
        storeData() {        
          let projectsPayload = this.$store.state.portfolioBuildInfo.projects.concat({
            imageurl: this.imageurl,
            githuburl: this.repo,
            description: this.description,
            liveurl: this.live
          })
          console.log('payload', projectsPayload)
          this.$store.commit('buildPortfolio', {key: 'projects', value: projectsPayload})    
          this.stored = true
          console.log(this.$store.state)
        },
        newProject() {
          this.file= ''
          this.description= ''
          this.repo= ''
          this.live= ''
          this.stored= false
          this.imageurl= ''   
        }
    },
    computed: {
      nextPage() {
        return this.stored
      }
    }
  }
</script>


<style scoped>
input {
  border: 1px solid black;
}
</style>