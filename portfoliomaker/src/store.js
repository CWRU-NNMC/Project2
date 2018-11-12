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
        currentPageJson: {},
    },
    mutations: {
        setPage(state, data) {
            state.currentPageJson = data
        }
    },
    getters: {
        getPageInfo: state => state.currentPageJson
    },
    actions: {
        getPageJson(context, {to}) {
            return new Promise((resolve, reject) => {
                let queryString = `/api${to.fullPath}`
                axios.post(queryString, to.id).then(({data}) => {
                    context.commit('setPage', {data})
                }).then(() => resolve())
                .catch(() => reject())
            })
        }
    }
})