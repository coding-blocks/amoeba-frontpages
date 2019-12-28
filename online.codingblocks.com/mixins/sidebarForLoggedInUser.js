export default {
  layout: ({ store }) => store.state.session.isAuthenticated ? 'default': 'landing-page'
}