import { tianqi } from '@/api/index'

export const qw = {
    state: {
        id: [],
    },
    mutations: {
        SET_ID(state, id) {
            state.id = id
        }
    },
    actions: {
        async Tianqi({ commit }, query) {
            const response = await tianqi(query)
            commit('SET_ID', response.data.data)
            return response
        }
    }
}