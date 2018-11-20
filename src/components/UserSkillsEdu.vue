<template>    
    <v-layout>
        
        <v-container>
            <v-layout>

<!--                 
                <v-flex md4 sm12>						
                    <v-tabs
                        centered
                        dark
                        hide-slider
                        icons-and-text>
                        <v-tab>
                            <span class="fontify">Skills</span>
                                <v-icon>desktop_mac</v-icon>
                        </v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-container>
                                    <v-form>
                                        <p>
                                            Need skills
                                        </p>
                                    </v-form>
                                </v-container>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-flex>
                <v-flex md4 sm12>
                    <v-tabs
                        centered
                        dark
                        hide-slider
                        icons-and-text>
                        <v-tab>
                            <span class="fontify">Edu</span>
                                <v-icon>account_balance</v-icon>
                        </v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-container>
                                    <v-form>
                                        <p>
                                            Your education
                                        </p>
                                    </v-form>
                                </v-container>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-flex>  -->

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
                                        <div v-for='(portfolio, i) in userPortfolios' :key='i'>
                                             <router-link :to='{ path: "/portfolio/" + portfolio.name }'> 
                                                {{ portfolio.name }} 
                                            </router-link> 
                                            <p> {{ portfolio.description }} </p>

                                        </div>                                    
                                </v-container>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-flex> 
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
    </v-layout>
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
</style>



