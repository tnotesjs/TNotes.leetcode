/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // 如果需要种的花数量为 0，直接返回 true
  if (n === 0) return true

  let count = 0 // 记录剩余空间种下的花的数量

  for (let i = 0; i < flowerbed.length; i++) {
    // 检查当前位置是否可以种花
    if (
      flowerbed[i] === 0 && // 当前位置没有种花 🌸
      (i === 0 || flowerbed[i - 1] === 0) && // 当前位置的左边没有种花 🌸 或者越界
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // 当前位置的右边是空 🌸 或者越界
    ) {
      flowerbed[i] = 1 // 种花
      count++ // 增加已种花数量

      // 如果已经种够了 n 朵花，直接返回 true
      if (count >= n) {
        return true
      }
    }
  }

  return count >= n
}
// @lc code=end
