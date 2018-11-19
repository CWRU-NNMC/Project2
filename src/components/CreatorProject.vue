<template>
  <div>
    <v-app>
      <v-content>
        <h2>Add A Project</h2>
        <label for="description">
          <input type="text" v-model='description'>
        </label>
        <v-container>
          <input type="file" name='file' id="projectImg" ref="file" accept="image/*" v-on:change="processUpload()" />
          <v-btn @click='submitImage()'>Add Image</v-btn>
        </v-container>
      </v-content>

      <router-link to='templates'>Choose A Template</router-link>
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
              console.log('here')
          },
          submitImage() {
              let formData = new FormData();
              formData.append('file', this.file);
              formData.append('format', 'kfunjy1s') // auto formatting 
              console.log(this.file)
              this.$store.dispatch('uploadProjectImg', formData).then(() => console.log (this.$store.getters.getImgUrl))
          }
      }
  }
</script>
