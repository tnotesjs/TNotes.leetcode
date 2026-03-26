/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
  processorTime.sort((a, b) => a - b)
  tasks.sort((a, b) => b - a)
  let ans = 0
  for (let i = 0; i < processorTime.length; i++) {
    ans = Math.max(ans, processorTime[i] + tasks[i * 4])
  }
  return ans
}
