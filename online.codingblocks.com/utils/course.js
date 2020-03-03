export const topRunForCourse = (course) => {
  let runs = course['active-runs']
  if (!runs || !runs.length) runs = course.runs

  const now = +new Date() / 1000.0

  const currentRuns = runs.filter(
    (run) =>
      run['enrollment-start'] < now &&
      run['enrollment-end'] > now &&
      run.status === 'published' &&
      !run.unlisted
  )

  const byPrice = (l) => l.price

  return currentRuns.sort(byPrice)[0] || runs.sort(byPrice)[0]
}

export const textForDifficulty = (difficulty) =>
  !isNaN(+difficulty) && ['Beginner', 'Medium', 'Advanced'][+difficulty]


export const formatContentDuration = function (duration) {
	if(isNaN(duration) || duration == 0){
			return "--";
  }
  const hours = Math.floor(duration / (60 * 60 * 1000))
  const mins = Math.floor(duration / (60 * 1000))

  return hours >= 1 ? `${hours}hrs` : `${mins}mins`
}