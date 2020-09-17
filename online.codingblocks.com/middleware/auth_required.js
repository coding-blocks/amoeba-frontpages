/*
  If user is not loggedIn, redirect him/her to /app instead
*/
export default async function ({ store, redirect }) {
  const isAuthenticated = !!store.state.session.user

  if (!isAuthenticated) {
    return redirect('/app/')
  } 
}
