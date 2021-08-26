import {
	fetchNewList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemInfo
} from '@/api/index'

export default {
	FETCH_NEWS({ commit }) {
		fetchNewList()
			.then(({ data }) => commit('SET_NEWS', data))
			.catch(err => console.error(err))
	},
	FETCH_ASK({ commit }) {
		fetchAskList()
			.then(({ data }) => commit('SET_ASK', data))
			.catch(err => console.error(err))
	},
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => commit('SET_JOBS', data))
			.catch(err => console.error(err))
	},
	FETCH_USER({ commit }, id) {
		fetchUserInfo(id)
			.then(({ data }) => commit('SET_USER', data))
			.catch(err => console.error(err))
	},
	FETCH_ITEM({ commit }, id) {
		fetchItemInfo(id)
			.then(({ data }) => commit('SET_ITEM', data))
			.catch(err => console.error(err))
	}
}
