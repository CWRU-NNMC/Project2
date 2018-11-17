<template>
  <div>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import foot from './components/Foot'

export default {
  name: 'App',
  components: {
    'app-footer': foot
  }
}
</script>