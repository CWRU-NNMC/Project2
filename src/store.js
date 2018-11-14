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
        nameAvailable: false
    },
    mutations: {
        setPage(state, data) {
            state.currentPageJson = data
        },
        setNameAvailable(state, data) {
            state.nameAvailable = data
        }
    },
    getters: {
        getPageInfo: state => state.currentPageJson,
        getPageHidden: state => state.currentPageJson.public,
        getNameAvailable: state => state.nameAvailable
    },
    actions: {
        getPageJson(context, {to}) {
            return new Promise((resolve, reject) => {
                let queryString = `/api${to.fullPath}`
                axios.post(queryString, to.id).then(({data}) => {
                    context.commit('setPage', {data})
                }).then(() => resolve(true))
                .catch((error) => {
                    console.log(error); 
                    resolve(false)})   /// this resolves if user/portfolio doesn't exist. router calling it checks for boolean
            })
        },
        /////////// this will require using the getter function as store.dispatch('checkNameAvailable', name).then(() => store.getters.getNameAvailable)
        checkNameAvailable (context, {name, pageType}) {
            let queryString = `/api/${pageType}/query/${name}`
            axios.post(queryString, name).then(res => context.commit('setNameAvalable', {res}))
        },
        //////// add user/portfolio action happens here
    }
})