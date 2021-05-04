export const state = () => ({
  wishlist_and_course : new Map(),
  course_and_wishlist : new Map()
})


export const mutations = {
  setMaps(state, user_course_wishlist) {
    for (const cur_course in user_course_wishlist) {
      state.wishlist_and_course.set(user_course_wishlist[cur_course].id,user_course_wishlist[cur_course].courseId);
      state.course_and_wishlist.set(user_course_wishlist[cur_course].courseId,user_course_wishlist[cur_course].id);
      
    }
    console.log(state.wishlist_and_course);
  },
  delCourse(state,wishlist_id){

    const course_id = state.wishlist_and_course.get(course_id);
    //deleteing the entry from course_and_wishlist map
    state.course_and_wishlist.delete(course_id);
    //deleteing the entry from wishlist_and_course map
    state.wishlist_and_course.delete(wishlist_id);
    
  }
}  