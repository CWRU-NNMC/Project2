<template>
     <port1></port1>
    <!-- <port2></port2> -->
</template>
<script>
import portTemp1 from "../components/PortTemp1"
import portTemp2 from '../components/PortTemp2'
import store from '../store.js'
export default {
    data() {
        return {
            pageJson: store.getters.getPageInfo
            // ^ probably descructure this so it's not a pain 
        }
    },
    beforeRouteUpdate(to, from, next) {
        store.dispatch('getPageJson', {to}).then(() => {
            console.log(store.getters.getPageInfo)
            next()
    })
    },
    components: {
        "port1": portTemp1,
        'port2': portTemp2
    }
}
</script>