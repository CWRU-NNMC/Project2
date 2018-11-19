<template>
  <div>
    <v-app>
      <v-content>
        <form v-if='!nextPage'>
          <h2>Choose Your Template</h2>
            <label for="temp1"> Template 1
              <input type="radio" id="temp1" value="1" v-model="template">
            </label>
            <label for="temp2"> Template 2
              <input type="radio" id="temp2" value="2" v-model="template">
            </label>
            <label for="temp3"> Template 3
              <input type="radio" id="temp3" value="3" v-model="template">
            </label>
            <v-btn @click='storeData'>Submit Template</v-btn>
        </form>
        <div v-if='nextPage'>
          <v-btn @click='finishPortfolio'>Finalize And Submit</v-btn>
          <p>This May Take A Few Seconds...</p>
        </div>
            

      </v-content>
    </v-app>
    <!-- <router-link>Finish: Create Your Portfolio</router-link> -->
  </div>
</template>


<script>
export default {
  data () {
    return {
      template: 0,
      stored: false
    }
  },
  computed: {
    nextPage() {
      return this.stored
    }
  },
  methods: {
    storeData() {        

          this.$store.commit('buildPortfolio', {key: 'template', value: this.template})    
          this.stored = true
          console.log(this.$store.state)
        },
    finishPortfolio() {
      return 'lol'
    }
  }
}
</script>
