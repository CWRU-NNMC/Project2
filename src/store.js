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
        setPage(state, data) {
            state.userPageInfo = data
        }
    },
    getters: {
        getPageInfo: state => state.userPageInfo
    },
    actions: {
        getUserPage(context, {to}) {
            return new Promise((resolve, reject) => {
                console.log(to)
                let queryString = `/api${to.fullPath}`
                axios.post(queryString, to.id).then(({data}) => {
                    console.log(data)
                    console.log('gotten')
                    context.commit('setPage', {data})
                }).then(() => resolve())
            })
        }
    }
})