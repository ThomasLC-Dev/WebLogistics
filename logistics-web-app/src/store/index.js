import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
	state: {
		token: "temp"
	},
	mutations: {
		SET_TOKEN(state, token){
			state.token = token;
		}
	},
	actions: {
		setToken({commit}, token){
			commit('SET_TOKEN', token);
		}
	},
	modules: {
	},
	plugins: [
		createPersistedState()
	]
})
