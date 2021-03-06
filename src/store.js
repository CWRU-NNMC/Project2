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
        usersid: 0, 
        password: '',
        userToken: '',
        userAuthorized: false,
        currentPageJson: {},
        currentProjectImg: '',
        nameAvailable: false, 
        error: '',
        portfolioBuildInfo: { 
            portfolioName: '',
            description: '',
            template: 0,
            projects: [],
            technologies: [],
            portfolioid: 0,
            config: {"a": "b"}
         }
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
        },
        setToken (state, data) {
            state.userToken = data
        },
        setUserName (state, name) {
            state.userName = name
        },
        buildPortfolio (state, {key, value}) {
            state.portfolioBuildInfo[key] = value
        },
        
        setCurrentProjectImg (state, url) {
            state.currentProjectImg = url
        },
        setPortfolioId (state, id) {
            state.portfolioBuildInfo.portfolioid = id
        },
        setUserId (state, id) {
            state.usersid = id
        }
    },
    getters: {
        getNameAvailable: state => state.nameAvailable,
        getImgUrl: state => state.currentProjectImg,
        getPageInfo: state => state.currentPageJson,
    },
    actions: {
        getPortfolioJson({commit}, {to}) {
                let queryString = `/api${to.fullPath}`
                return axios.post(queryString, to.params)
                .then(({data}) => commit('setPage', data))
                .catch(error => commit('setFailState', error))
        },
        getUserPage({ commit }, userData){
            let queryString = `/api/user/${userData.userName}`
            return axios.post(queryString, userData) 
                .then(res => res ? commit('setPage', res) : router.push({name: `/login`}))
        },
        authUser({commit}, credentials){
            return axios.post('/api/user/auth/', credentials).then(res => {
                if (res.data.auth){
                    commit('setToken', res.data.token)
                    commit('setUserName', res.data.userName)
                    commit('setUserId', res.data.usersid)                    
                }
                else {
                commit('setFailState', res.message)
                }
            })
        },
        /////////// this will require using the getter function as store.dispatch('checkNameAvailable', name).then(() => store.getters.getNameAvailable)
        checkNameAvailable ({commit}, {name, pageType}) {
            commit('setNameAvailable', false)
            let queryString = `/api/${pageType}/query/${name}`
            return axios.post(queryString, name).then(({data}) => commit('setNameAvailable', data))
        },
        addUserOrPort (context, {name, data, pageType}){
            if (!context.state.nameAvailable) return false;
            else{
                let queryString = `/api/manage/${pageType}/${name}`
                return axios.post(queryString, data).then(res => {
                    if (pageType === 'portfolio') context.commit('setPortfolioId', res.data.insertId)
                    return true
                })
            }
        },
        uploadProjectImg ({commit}, data) {
            return axios.post('/api/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => commit('setCurrentProjectImg', res))
        },
        uploadUserImg ({state}, data) {
            return axios.post('/api/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            /////// This is left in because we will eventually want to decouple user creation from user image adding, and this accomplishes that
            // .then(res => {
            //     let userImgData = {
            //         userName: state.userName,
            //         token: state.token,
            //         updates: {userimage: res}
            //     }
            //     axios.put(`/api/manage/user/${state.userName}`, userImgData)
            // })
            
        },
        addProject (context, {name, data}) {
            let queryString = `/api/manage/project/${name}`
            return axios.post(queryString, data).then(() => true)
        },
        updateElement (context, {name, data, pageType}) {
            let queryString = `/api/manage/${pageType}/${name}`
            return axios.put(queryString, data).then(() => true)
        },
        deleteElement (context, {name, pageType}){
            let queryString = `/api/manage/${pageType}/${name}`
            return axios.delete(queryString, name).then(() => true)
        },
    }
})
