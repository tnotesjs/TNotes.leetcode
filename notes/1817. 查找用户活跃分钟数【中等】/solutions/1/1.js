/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const map = new Map()
  for (const [id, time] of logs) {
    if (!map.has(id)) map.set(id, new Set())
    map.get(id).add(time)
  }
  const ans = new Array(k).fill(0)
  for (const [, times] of map) {
    const uam = times.size
    if (uam <= k) ans[uam - 1]++
  }
  return ans
}
