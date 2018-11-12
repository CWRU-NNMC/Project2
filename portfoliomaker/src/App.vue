<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import body from './components/body'
import head from './components/head'
import foot from './components/foot'
export default {
  name: 'App',
  components: {
    'app-header': head,
    'app-footer': foot,
    'app-body': body
  }
}
</script>


