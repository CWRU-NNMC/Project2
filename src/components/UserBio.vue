<template>

    <v-content>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <v-container>
                    <v-layout>
                        <v-flex xs4>						
                        <v-avatar size="250px">
                        <img
                            class="elevation-13 mb-1"
                            src="../assets/logo.png"
                            alt="Pro Image">
                        </v-avatar>
                        </v-flex>
                        <v-flex xs8>
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
                                                    Pull from The bio they entered?
                                                </p>
                                            </v-container>
                                        </v-card>
                                    </v-tab-item>
                                </v-tabs>
                            </v-flex> 
                        </v-layout>
                    </v-container>
            </v-flex>
        </v-layout>
    </v-content>

</template>

<script>
import head from '../components/Head'

export default {
    components: {
        'app-head': head
    }
}
</script>