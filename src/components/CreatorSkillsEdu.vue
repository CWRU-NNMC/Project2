<template>
  <div>
    <h2>Which Technologies Would You Like To Highlight?</h2>
    <form>
      <div>
        <label for="React">
          <input type="checkbox" id="React" value="React" v-model='techs'> React
        </label>
      </div>
      <div>
        <label for="Angular">
          <input type="checkbox" id="Angular" value="Angular" v-model='techs'> Angular
        </label>
      </div>
      <div>
        <label for="Vue">
          <input type="checkbox" id="Vue" value="Vue" v-model='techs'> Vue
        </label>
      </div>
      <div>
        <label for="MySQL">
          <input type="checkbox" id="MySQL" value="MySQL" v-model='techs'> MySQL
        </label>
      </div>
      <div>
        <label for="MongoDB">
          <input type="checkbox" id="MongoDB" value="MongoDB" v-model='techs'> MongoDB
        </label>
      </div>
    </form>

    <ul>
      <li v-for='item in techs'>{{ item }}</li>
    </ul>
    <router-link to='basic'>Back: Basic Info</router-link>
    <router-link to='projects'>Next: Add A Project</router-link>

  </div>
</template>


<script>
export default {
  data () {
    return {
      techs: []
    }
  },
  computed: {
    techsObject() {
      let techList = ['React', 'Angular', 'Vue', 'MySQL', 'MongoDB']
      techList.map(tech => {})
    }
  }
}
</script>
