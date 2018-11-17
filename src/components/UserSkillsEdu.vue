<template>

    <v-content>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <v-container>
                    <v-layout>
                        <v-flex xs4>						
                            <v-tabs
                            centered
                            dark
                            hide-slider
                            icons-and-text>
                                <v-tab>
                                    <span class="fontify">Your Skills</span>
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
                        <v-flex xs8>
                        <v-tabs
                            centered
                            dark
                            hide-slider
                            icons-and-text>
                                <v-tab>
                                    <span class="fontify">Your Education</span>
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
                            </v-flex> 
                        </v-layout>
                    </v-container>
            </v-flex>
        </v-layout>
    </v-content>

</template>