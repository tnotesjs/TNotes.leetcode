/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const jobs = difficulty.map((d, i) => [d, profit[i]])
  jobs.sort((a, b) => a[0] - b[0])
  worker.sort((a, b) => a - b)
  let res = 0,
    best = 0,
    j = 0
  for (const w of worker) {
    while (j < jobs.length && jobs[j][0] <= w) {
      best = Math.max(best, jobs[j][1])
      j++
    }
    res += best
  }
  return res
}
