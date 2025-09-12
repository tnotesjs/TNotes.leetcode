/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const res = []

  // 枚举所有合法的小时和分钟
  for (let h = 0; h <= 11; h++) {
    for (let m = 0; m <= 59; m++) {
      if (
        // 小时二进制中 1 的个数
        h.toString(2).split('1').length -
          1 + // 分钟二进制中 1 的个数
          (m.toString(2).split('1').length - 1) ===
        turnedOn
      ) {
        // 格式化分钟为两位数
        res.push(`${h}:${m < 10 ? '0' + m : m}`)
      }
    }
  }

  return res
}
// @lc code=end
