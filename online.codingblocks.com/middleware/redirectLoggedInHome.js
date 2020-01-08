/*
  If user is loggedIn, redirect him to /dashboard instead
*/
export default async function ({ store, route, redirect }) {
  const isAuthenticated = !!store.state.session.user

  if (isAuthenticated && route.name == 'index') {
    return redirect('/app/dashboard')
  } 
}