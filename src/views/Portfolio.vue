<template>
    <port1></port1>
</template>
<script>
import portTemp1 from "../components/PortTemp1"
export default {
    data() {
        return {
            pageJson: $store.getters.getPageInfo
            // ^ probably descructure this so it's not a pain 
        }
    },
    beforeRouteUpdate(to, from, next) {
        $store.dispatch('getPageJson', {to}).then(() => {
    })
    },
    components: {
        "port1": portTemp1
    }
}
</script>
