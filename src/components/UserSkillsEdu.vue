<template>  
<v-content>
<v-layout>        
    <v-container>
        <v-flex md12 sm12>
            <v-tabs
                centered
                dark
                hide-slider
                icons-and-text>
                <v-tab>
                    <span class="fontify">Portfolios</span>
                        <v-icon>folder</v-icon>
                </v-tab>
                <v-tab-item>
                    <v-card>
                        <v-container> 
                            <v-flex offset-sm3>                                   
                            <div v-for='(portfolio, i) in userPortfolios' :key='i'>
                                <router-link :to='{ path: "/portfolio/" + portfolio.name }'> 
                                {{ portfolio.name }} 
                                </router-link> 
                                <span class="fontify"><p> {{ portfolio.description }} </p></span>
                            </div>   
                            </v-flex>                                 
                        </v-container>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-flex>
    </v-container>
</v-layout>
<v-layout>
    <v-container>
            <v-flex md12 sm12>
                <v-tabs
                    centered
                    dark
                    hide-slider
                    icons-and-text>
                    <v-tab>
                        <span class="fontify">About You</span>
                            <v-icon>fingerprint</v-icon>
                    </v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-container>
                                    <span class="fontify text-center"><p>
                                        {{ userBio }}
                                    </p></span>
                                </v-container>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-flex> 
        </v-container>      
    </v-layout>
<v-content>





<!--       <v-layout>
            <v-flex md12 sm12>
                <v-tabs
                    centered
                    dark
                    hide-slider
                    icons-and-text>
                    <v-tab>
                        <span class="fontify">About You</span>
                            <v-icon>fingerprint</v-icon>
                    </v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-container>
                                    <p>
                                        {{ userBio }}
                                    </p>
                                </v-container>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-flex> 
            </v-layout>
        </v-container>      
    </v-layout> -->
</template>

<script>
    
export default {
    data () {
        return {
            userBio: '',
            userPortfolios: [],
        }
    },
    created () {
        this.userBio = this.$store.getters.getPageInfo.data.userBio
        this.userPortfolios = this.$store.getters.getPageInfo.data.userPortfolios
    }
}
</script>

<style scoped>
    .cursorPointer {
        cursor: pointer;
    }
    .fontify {
		font-family: 'Orbitron', sans-serif;
	}
</style>



