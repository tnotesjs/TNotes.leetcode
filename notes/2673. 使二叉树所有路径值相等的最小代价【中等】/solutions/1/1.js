/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {
  let ans = 0
  for (let j = Math.floor(n / 2) - 1; j >= 0; j--) {
    const l = 2 * j + 1,
      r = 2 * j + 2
    ans += Math.abs(cost[l] - cost[r])
    cost[j] += Math.max(cost[l], cost[r])
  }
  return ans
}
