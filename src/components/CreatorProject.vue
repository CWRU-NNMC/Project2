<template>
  <div>
    <v-app>
      <v-content>
        <h2>Add A Project</h2>
        <v-container>
          <input type="file" name='file' id="projectImg" ref="file" accept="image/*" v-on:change="processUpload()" />
          <v-btn @click='submitProject()'>Submit</v-btn>
        </v-container>
      </v-content>
    </v-app>
   

    <router-link to='skills'>Back: Skills And Technologies</router-link>
    <router-link to='templates'>Choose A Template</router-link>
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
          submitProject() {
              let formData = new FormData();
              formData.append('file', this.file);
              formData.append('format', 'kfunjy1s') // auto formatting 
              console.log(this.file)
              this.$store.dispatch('uploadProjectImg', formData).then(() => console.log (this.$store.getters.getImgUrl))
          }
      }
  }
</script>
