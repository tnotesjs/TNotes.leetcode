/*
 * @lc app=leetcode.cn id=2144 lang=javascript
 *
 * [2144] 打折购买糖果的最小开销
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  // 将糖果价格按从高到低排序
  cost.sort((a, b) => b - a)

  let totalCost = 0

  // 按每3个糖果为一组处理
  for (let i = 0; i < cost.length; i++) {
    // 每组的第 1 个和第 2 个需要购买，第 3 个免费
    if (i % 3 !== 2) {
      totalCost += cost[i]
    }
  }

  return totalCost
}
// @lc code=end
