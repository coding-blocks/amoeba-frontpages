export default async function ({ store, app: { $cookies }, $axios }) {
  const isAuthenticated = !!store.state.session.user
  const token = $cookies.get('auth-jwt')

  if (isAuthenticated) {

    try {
      const { data: { data: response } } = await $axios.request('/user_course_wishlists')
      const user_course_wishlists = [];
      for (const cur_course in response) {
        user_course_wishlists.push({ courseId: response[cur_course].relationships.course.data.id, id: response[cur_course].id });
      }
      store.commit('user_course_wishlists/setMaps',user_course_wishlists);
    }catch (err) {
      console.error(err);
    }
  }
}
