/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  let maxDistance = 0 // 记录最大距离
  let lastPosition = -1 // 记录上一个1的位置

  // 遍历n的二进制表示中的每一位
  for (let i = 0; n > 0; i++) {
    // 检查当前最低位是否为1
    if (n & 1) {
      // 如果之前已经遇到过1，则计算距离
      if (lastPosition !== -1) {
        maxDistance = Math.max(maxDistance, i - lastPosition)
      }
      // 更新上一个1的位置
      lastPosition = i
    }
    // 右移一位继续检查下一位
    n >>= 1
  }

  return maxDistance
}
// @lc code=end
