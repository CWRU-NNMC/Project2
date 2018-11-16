<template>
	<v-app>
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
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.v-content {
	background-image: radial-gradient(gainsboro,mediumspringgreen,gainsboro)
	}
</style>