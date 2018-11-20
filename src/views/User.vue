<template>
    <v-content>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2 pl-4>
                <v-container>
                    <app-gen></app-gen>
                    <v-btn @click='$router.push({ path: "portfolio-creator/"})'>Create A New Portfolio</v-btn>
                    <app-git></app-git> 
                </v-container>
            </v-flex>     
        </v-layout>
    </v-content>
</template>

<script>
import Head from '../components/Head'
import git from '../components/UserSkillsEdu'
import gen from '../components/UserBio'

export default {
    data() {
        return {
            pageJson: this.$store.getters.getPageInfo,
            // ^ probably descructure this so it's not a pain 
        }
    },
    // beforeRouteUpdate(to, from, next) {
    //     $store.dispatch('getPageJson', {to}).then(() => {
    // })
    // },
    components: {
        'app-head': Head,
        'app-git': git,
        'app-gen': gen
    },
	methods: { 
		goTo(item) {
          this.$router.push({ name: item})
		}
	}
}
</script>

<style scoped>
	.v-content {
	background-image: radial-gradient(gainsboro,mediumspringgreen,gainsboro)
	}
</style>

