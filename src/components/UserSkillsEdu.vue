<template>


        <v-layout>

                <v-container>
                    <v-layout>
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
                            </v-flex> 
                            <v-flex md4 sm12>
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
        
        </v-layout>


</template>