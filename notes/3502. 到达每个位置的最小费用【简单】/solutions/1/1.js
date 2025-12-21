/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
  const n = cost.length
  const answer = new Array(n)
  let minCost = Infinity

  // 遍历每个位置，维护前缀最小值
  for (let i = 0; i < n; i++) {
    minCost = Math.min(minCost, cost[i])
    answer[i] = minCost
  }

  return answer
}
