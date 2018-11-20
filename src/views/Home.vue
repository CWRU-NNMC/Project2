<template>
	<v-app>
    <app-head></app-head>
    <v-content>
	  	<v-container>
			  <v-layout>
				  <v-carousel>
					  <v-carousel-item
						  v-for="(item,i) in items"
						  :key="i"
						  :src="item.src">
					  </v-carousel-item>
				  </v-carousel>
			  </v-layout>
		  </v-container>
	  </v-content>
  </v-app>
</template>

<script>
import Head from '../components/Head'
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://66.media.tumblr.com/158f6a0fc8a76859e48edf6c62c429b8/tumblr_piiboojvhR1xdm0hjo1_1280.png'
          },
          {
            src: 'https://66.media.tumblr.com/4e5eee7e85a8688de405cef9156fd5c0/tumblr_pihcrus2HJ1xdm0hjo1_1280.png'
          },
          {
            src: 'https://66.media.tumblr.com/f0a6d87d1c2519b57fdccff7e2b57b99/tumblr_pihcrus2HJ1xdm0hjo2_1280.png'
          }
        ]
      }
    },
    components: {
        'app-head': Head
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-content {
	background-image: radial-gradient(gainsboro,green)
}
</style>