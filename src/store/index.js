import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginStatus: sessionStorage.getItem('token')
    },
    getters: {
        getLoginStatus: (state) => {
            return state.loginStatus
        }
    },
    mutations: {
        setLoginStatus: (state, status) => {
            state.loginStatus = status
        }
    },
    actions: {
        asyncLoginStatus: (context, status) => {
            context.commit('setLoginStatus', status)
        }
    }
})
