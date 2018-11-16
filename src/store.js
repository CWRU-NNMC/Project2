import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        userLoggedIn: false,
        userName: '',
        password: '',
        userToken: '',
        currentPageJson: {},
        nameAvailable: false,
        error: ''
    },
    mutations: {
        setPage(state, data) {
            state.currentPageJson = data
        },
        setNameAvailable(state, data) {
            state.nameAvailable = data
        },
        setAuthorized(state, data) {
            state.userAuthorized = data
        },
        setFailState (state, error) {
            state.error = error
        }
    },
    getters: {
        getPageInfo: state => state.currentPageJson,
        getPageHidden: state => state.currentPageJson.public,
        getNameAvailable: state => state.nameAvailable
    },
    actions: {
        getPortfolioJson(context, {to}) {
                let queryString = `/api${to.fullPath}`
                return axios.post(queryString, to.id)
                .then(({data}) => context.commit('setPage', {data}))
                .catch(error => context.commit('setFailState', error))
        },
        authUser({state, commit}){
            let userCredentials = {userName: state.userName, password: state.password}
            // axios.post('/api/user/auth/', userCredentials).then(res => res.auth ? context.commit(some token) : console.log(res.message))
        },
        /////////// this will require using the getter function as store.dispatch('checkNameAvailable', name).then(() => store.getters.getNameAvailable)
        checkNameAvailable (context, {name, pageType}) {
            context.commit('setNameAvailable', false)
            let queryString = `/api/${pageType}/query/${name}`
            axios.post(queryString, name).then(res => context.commit('setNameAvailable', {res}))
        },
        addUserOrPort (context, {name, data, pageType}){
            if (!context.state.nameAvailable) return false;
            else{
            let queryString = `/api/manage/${pageType}/${name}`
            axios.post(queryString, data).then(() => router.push({path: `/${pageType}/${name}`}))
            }
        },
        addProject (context, {name, data}) {
            let queryString = `/api/manage/project/${name}`
            axios.post(queryString, data).then(() => true)
        },
        updateElement (context, {name, data, pageType}) {
            let queryString = `/api/manage/${pageType}/${name}`
            axios.put(queryString, data).then(() => true)
        },
        deleteElement (context, {name, pageType}){
            let queryString = `/api/manage/${pageType}/${name}`
            axios.delete(queryString, name).then(() => true)
        }
    }
})