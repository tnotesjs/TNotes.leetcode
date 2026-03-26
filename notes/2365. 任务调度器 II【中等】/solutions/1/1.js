/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function (tasks, space) {
  const map = new Map()
  let day = 0
  for (const task of tasks) {
    day++
    if (map.has(task)) {
      day = Math.max(day, map.get(task) + space + 1)
    }
    map.set(task, day)
  }
  return day
}
