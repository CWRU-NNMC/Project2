import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        userLoggedIn: false,
        userName: false,
        userId: 0,
        currentPortfolio: {},
        userPageInfo: {}
    },
    mutations: {

    },
    getters: {

    },
    actions: {
    }
})