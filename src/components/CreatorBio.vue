<template>
<v-app>
    <v-content>
    <app-head></app-head>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-container>
                        <div>
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
                                                    <h1> Somehow add lines for text input for your bio </h1>
                                                </v-container>
                                            </v-card>
                                        </v-tab-item>
                            </v-tabs>
                        </div>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-content>
</v-app>
</template>

<script>
import head from '../components/Head'

export default {
    components: {
        'app-head': head
    }
}
</script>