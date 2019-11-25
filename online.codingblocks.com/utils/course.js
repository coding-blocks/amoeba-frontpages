export const topRunForCourse = (course) => {
  let runs = course['active-runs']
  if (!runs || !runs.length) runs = course.runs

  const now = +new Date() / 1000.0

  const currentRuns = runs.filter(
    (run) =>
      run['enrollment-start'] < now &&
      run['enrollment-end'] > now &&
      !run.unlisted
  )

  const byPrice = (l) => l.price

  return currentRuns.sort(byPrice)[0] || runs.sort(byPrice)[0]
}

export const textForDifficulty = (difficulty) =>
  !isNaN(+difficulty) && ['Beginner', 'Medium', 'Advanced'][+difficulty]
