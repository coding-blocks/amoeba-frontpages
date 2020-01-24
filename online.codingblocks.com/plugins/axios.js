import qs from 'qs'

export default function({ $axios, app: { $cookies } }) {
  const token = $cookies.get('auth-jwt')
  if (token) {
    // we have loggedIn session
    $axios.defaults.headers.common['Authorization'] = `JWT ${token}`
  }
  $axios.onRequest(config => {
    config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'brackets' });
    return config;
  })
}
