/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0

  // 对于每个石头，检查是否为宝石
  for (const stone of stones) {
    for (const jewel of jewels) {
      if (stone === jewel) {
        count++
        break // 找到匹配后跳出内层循环
      }
    }
  }

  return count
}
// @lc code=end
