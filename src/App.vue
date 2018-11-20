<template>
  <div>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Foot from './components/Foot'

export default {
  name: 'App',
  components: {
    'app-footer': Foot
  }
}
</script>