/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  // 统计糖果的类型数
  const uniqueCandies = new Set(candyType)
  const uniqueCount = uniqueCandies.size

  // Alice 最多能吃的糖果数量
  const maxEatCount = candyType.length / 2

  // 返回能吃到的最多种类数（类型数和可吃数量的较小值）
  return Math.min(uniqueCount, maxEatCount)
}
// @lc code=end
