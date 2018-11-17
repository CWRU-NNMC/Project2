<template>
    <div id="secure">
<port1></port1>
    </div>
</template>

<script>
import port1 from "../components/PortTemp1"
    export default {
        name: 'Secure',
        data() {
            return {};
        },
        components: {
            "port1": port1
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>