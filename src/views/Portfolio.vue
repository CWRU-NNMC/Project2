<template>
<div>
    <port1 v-if="template === 1"></port1>
    <port2 v-else></port2>
</div>
</template>
<script>
import portTemp1 from "../components/PortTemp1"
import portTemp2 from '../components/PortTemp2'
import store from '../store.js'
export default {
    data() {
        return {
            template: 0
        }
    },
    created() {
        this.template = this.$store.getters.getPageInfo.portfolioInfo[0].template
    },
    beforeRouteUpdate(to, from, next) {
        store.dispatch('getPageJson', {to}).then(() =>  next())
    },
    components: {
        "port1": portTemp1,
        'port2': portTemp2
    }
}
</script>