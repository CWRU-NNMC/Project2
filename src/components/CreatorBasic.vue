<template>
  <div>
    <h2>Basic Portfolio Info</h2>
      <div>
        <label for="portfolioName">Portfolio Name</label>
        <input type="text" id="portfolioName" v-model='portfolioName'>        
        <button @click='checkAvail'>Check Availability</button>
        <p> {{ avail }} </p>
        <p v-if="greenCheck">AVAILABLE!!</p>
        <p v-if="redCheck">NOT AVAILABLE!!</p>
      </div>    
      <div>
        <label for="description">Description</label>
        <input type="text" id="description" v-model='description'>
      </div>
      <div></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      portfolioName: '',
      description: '',
      nameChecked: false
    }
  },
  methods: {
    checkAvail() {
      console.log(this.portfolioName)
      this.nameChecked = true
      this.$store.dispatch('checkNameAvailable', {name: this.portfolioName, pageType: 'portfolio'})
      // .then(() => store.getters.getNameAvailable)
    }
  },
  computed: {
    avail() {
      return this.$store.getters.getNameAvailable
    },
    greenCheck() {
      return this.nameChecked && this.$store.getters.getNameAvailable
    },
    redCheck() {
      return this.nameChecked && !this.$store.getters.getNameAvailable
    }
  }
}
</script>

<style scoped>
  input {
    border: 1px solid black;
  }
</style>

