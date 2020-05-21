export const state = () => ({
  token: null,
  user: null,
  isAuthenticated: false
})


export const mutations = {
  setUser(state, user) {
    if (user.id) {
      state.user = user
      state.isAuthenticated = true
    }
    if(state.user.photo){
    	state.user.photo="./user-default-pic.png"
    }
  },
  setToken(state, token) {
    state.token = token
  }
}
