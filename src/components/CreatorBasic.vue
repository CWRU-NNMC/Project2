<template>
  <div>
    <h2>Basic Portfolio Info</h2>
      <form v-if='!nextPage'>
        <div>
          <label for="portfolioName">Portfolio Name</label>
          <input type="text" id="portfolioName" v-model='portfolioName' @click='nameChecked = false'>        
          <!-- <v-btn @click='checkAvail'>Check Availability</v-btn> -->
          <!-- <i v-if="greenCheck">AVAILABLE!!</i> -->
          <i v-if="redCheck">NOT AVAILABLE!!</i>
        </div>    
        <div >
          <label for="description">Description</label>
          <input type="text" id="description" v-model='description'>
        </div>
        <div>
          <v-btn v-if='!nextPage' @click='storeData' :disabled='processing'>Submit</v-btn>
        </div>
      </form>
      <div v-if='nextPage'>        
        <h3>Stored!</h3>
        <router-link v-if='nextPage' to='skills'>Next: Skills And Technologies</router-link>
      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      portfolioName: '',
      description: '',
      nameChecked: false,
      stored: false,
      process: false

    }
  },
  methods: {
    // checkAvail() {
    //   console.log(this.portfolioName)
    //   this.nameChecked = true
    //   this.$store.dispatch('checkNameAvailable', {name: this.portfolioName, pageType: 'portfolio'})
    //   .then(() => store.getters.getNameAvailable)
    // },
    storeData() {      
      this.process = true
      this.$store.dispatch('checkNameAvailable', {name: this.portfolioName, pageType: 'portfolio'})
        .then(() => {
          this.nameChecked = true
          return this.$store.getters.getNameAvailable
          })
      // .then(x => console.log(x))
        .then((avail) => {
          console.log(avail)
          if (avail) {
            this.$store.commit('buildPortfolio', {key: 'portfolioName', value: this.portfolioName})
            this.$store.commit('buildPortfolio', {key: 'description', value: this.description})           
            this.stored = true
            this.process = false
          }
          this.process = false
        })
    }
  },
  computed: {
    // avail() {
    //   return this.$store.getters.getNameAvailable
    // },
    // greenCheck() {
    //   return this.nameChecked && this.$store.getters.getNameAvailable
    // },
    redCheck() {
      return this.nameChecked && !this.$store.getters.getNameAvailable
    },
    nextPage() {
      return this.stored
    },
    processing() {
      return this.process
    }
  }
}
</script>

<style scoped>
  div {
    text-align: center;
  }
  input {
    border: 1px solid black;
  }
</style>

