<template>
    <v-layout>
        <v-container>
            <v-layout>
                <v-flex md12 offset-md4>						
                <v-avatar size="250px">
                <img
                    class="elevation-13 mb-1"
                    :src="userImage"
                    alt="Pro Image">
                </v-avatar>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    // gets user image 
export default {
    data () {
        return {
            userImage: ''
        }
    },
    created () {
        console.log(this.$store.getters.getPageInfo)
        this.userImage = this.$store.getters.getUserImage
    }
}
</script>


