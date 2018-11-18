<template>
  <div>
    <h1>Portfolio Creater</h1>

    <router-link to='basic'>Basic info</router-link> |
    <router-link to='skills'>Skills</router-link> |
    <router-link to='projects'>Projects</router-link> |
    <router-link to='templates'>Templates</router-link>

    <router-view></router-view>

  </div>
</template>


<script>
// import creatorBio from '../components/CreatorBio'
// import creatorSkillsEdu from '../components/CreatorSkillsEdu'
// import creatorProject from '../components/CreatorProject'
// import creatorChooseTemplate from '../components/CreatorChooseTemplate'

export default {
  // components: {
  //   creatorBio,
  //   creatorSkillsEdu,
  //   creatorProject,
  //   creatorChooseTemplate
  // },
  methods: {
    goTo(item) {
      this.$router.push({name: item})
    }
  }
}
</script>
