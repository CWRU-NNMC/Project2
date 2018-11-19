<template>
  <div>
    <form v-if='!nextPage'> 
      <h2>Which Technologies Would You Like To Highlight?</h2>
      <div v-for='tech in techList'>
        <label :for="tech">
          <input type="checkbox" :id="tech" :value="tech" v-model='techs'> {{ tech }}
        </label>
      </div>
      <div>
        <v-btn  @click='storeData'>Submit</v-btn>
      </div>
    </form>
    <div v-if='nextPage'>
      <h2>Stored!</h2>
      <router-link to='projects'>Next: Add A Project</router-link>    
    </div>

  </div>
</template>


<script>
export default {
  data () {
    return {
      techs: [],
      techList: ['Node', 'PHP', 'SASS', 'Bootstrap', 'React', 'Angular', 'Vue', 'MySQL', 'MongoDB'],
      stored: false
    }
  },
  methods: {
    storeData() {        
            this.$store.commit('buildPortfolio', {key: 'technologies', value: this.techs})    
            this.stored = true
            this.process = false
            // console.log(this.$store.state)
    }
  },
  computed: {
    nextPage() {
      return this.stored
    }
  }
}
</script>
