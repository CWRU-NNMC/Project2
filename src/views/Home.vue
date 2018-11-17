<template>
<v-app>
	<div>
		<app-head></app-head>
		<app-bio></app-bio>
		<app-edu></app-edu>
		<v-btn @click="goTo('creator')" id="btn">Add New</v-btn>
	</div>
</v-app>
</template>

<script>
import head from '../components/Head'
import bio from '../components/UserBio'
import eduSkills from '../components/UserSkillsEdu'

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
        'app-head': head,
		'app-bio': bio,
		'app-edu': eduSkills
    },
	methods: { 
		goTo(item) {
          this.$router.push({ name: item})
		}
	}
}
</script>