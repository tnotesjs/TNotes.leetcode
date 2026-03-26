/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  const MOD = 1000000007n
  ranges.sort((a, b) => a[0] - b[0])
  let groups = 0, maxEnd = -1
  for (const [s, e] of ranges) {
    if (s > maxEnd) groups++
    maxEnd = Math.max(maxEnd, e)
  }
  let ans = 1n
  for (let i = 0; i < groups; i++) ans = (ans * 2n) % MOD
  return Number(ans)
}
