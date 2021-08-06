export default {

  async fetchedLogin({commit}, payload) {
    try {
      const response = await this.$axios.$get(`api/data?mobileNumber=${payload.phone}&password=${payload.password}`)
      commit('SET_DATA_LOGIN', response[0])
      localStorage.setItem("dataLogin", JSON.stringify(response[0]));
    } catch(error) {
      throw error
    }
  }

};