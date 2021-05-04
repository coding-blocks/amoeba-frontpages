export const state = () => ({
    user_course_wishlist : []
  })
  
  
  export const mutations = {
    setUserCourseWishlists(state, user_course_wishlist) {
      for (const cur_course in user_course_wishlist) {
        state.user_course_wishlist.push(user_course_wishlist[cur_course]);
      }
      // state.user_course_wishlist = user_course_wishlist;
    },
    delCourse(state,id){
      let temp = [];
      for(const cur_course in state.user_course_wishlist){
        if(state.user_course_wishlist[cur_course].id != id){
             temp.push(state.user_course_wishlist[cur_course]);
        }
      }
      state.user_course_wishlist = temp;
    }
  }
  