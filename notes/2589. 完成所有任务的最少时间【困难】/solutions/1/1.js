/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function (tasks) {
  tasks.sort((a, b) => a[1] - b[1])
  const run = new Uint8Array(2001)
  for (const [start, end, duration] of tasks) {
    let d = duration
    for (let t = start; t <= end; t++) {
      if (run[t]) d--
    }
    for (let t = end; t >= start && d > 0; t--) {
      if (!run[t]) {
        run[t] = 1
        d--
      }
    }
  }
  let ans = 0
  for (let t = 0; t <= 2000; t++) ans += run[t]
  return ans
}
