export default {

  async fetchListUser({commit}) {
    try {
      const response = await this.$axios.$get(`api2/user?page=1&limit=8`)
      commit('SET_LIST_USER', response)
    } catch(error) {
      throw error
    }
  },

  async fetchDetailUser({commit}, id) {
    try {
      const response = await this.$axios.$get(`api2/user/${id}`)
      commit('SET_DETAIL_USER', response)
    } catch(error) {
      throw error
    }
  },

  async fetchEditUser({commit}, payload) {
    try {
      const response = await this.$axios.$put(`api/data/1`, payload)
      commit('SET_EDIT_USER', response)
    } catch(error) {
      throw error
    }
  },

};