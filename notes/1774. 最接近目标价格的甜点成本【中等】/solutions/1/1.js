/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  let ans = Infinity
  function dfs(idx, cost) {
    // 更新答案：更接近，或相同距离取较小值
    if (
      Math.abs(cost - target) < Math.abs(ans - target) ||
      (Math.abs(cost - target) === Math.abs(ans - target) && cost < ans)
    ) {
      ans = cost
    }
    if (idx === toppingCosts.length || cost > target) return
    // 每种配料可选 0/1/2 份
    dfs(idx + 1, cost)
    dfs(idx + 1, cost + toppingCosts[idx])
    dfs(idx + 1, cost + toppingCosts[idx] * 2)
  }
  for (const base of baseCosts) {
    dfs(0, base)
  }
  return ans
}
