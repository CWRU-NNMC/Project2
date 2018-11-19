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
export default {
}
</script>


<style scoped>
  div {
    text-align: center;
  }
</style>
