/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const start = rounds[0]
  const end = rounds[rounds.length - 1]
  const res = []

  if (start <= end) {
    for (let i = start; i <= end; i++) res.push(i)
  } else {
    for (let i = 1; i <= end; i++) res.push(i)
    for (let i = start; i <= n; i++) res.push(i)
  }

  return res
}
// Accepted - 2026.01.16
// 204/204 cases passed (0 ms)
// Your runtime beats 100 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (54.9 MB)
