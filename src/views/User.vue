<template>
<v-app>
<v-content>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2 pl-4>
                <v-container>
                    <app-gen></app-gen>
                </v-container>
            </v-flex>
        </v-layout>           
        <v-layout text-center>
            <v-flex md12 sm8 offset-md5 pl-3>
                <v-btn @click='$router.push({ path: "portfolio-creator/"})'>Create A New Portfolio</v-btn>
            </v-flex>
        </v-layout>
    
        <app-git></app-git> 
                             
               
<v-content>
</v-app>
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

