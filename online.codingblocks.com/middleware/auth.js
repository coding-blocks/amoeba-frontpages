

export default async function ({ store, app: { $cookies }, $axios }) {
  const isAuthenticated = !!store.state.session.user
  const token = $cookies.get('auth-jwt')

  console.log(isAuthenticated, token)
  if (isAuthenticated || !token) {
    return;
  }

  if (token) {
    // we have loggedIn session
    $axios.defaults.headers.common['Authorization'] = `JWT ${token}`

    // fetch current users
    try {
      const { data: { data: response } } = await $axios.request('/users/me')
      
      console.log(response)
      const user = {
        id: response.id,
        ...response.attributes
      }

      console.log(user)
      // set user
      store.commit('session/setUser', user)
    } catch (err) {
      // can't fetch user, consider noauth
      $cookies.remove('auth-jwt')
    }
  }

}