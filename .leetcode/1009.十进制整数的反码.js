/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  // 特殊情况处理
  if (n === 0) return 1

  // 找到大于n的最小2的幂次
  let powerOfTwo = 1
  while (powerOfTwo <= n) {
    powerOfTwo <<= 1 // 相当于 powerOfTwo *= 2
  }

  // 全1数就是 powerOfTwo - 1
  // 反码 = 全1数 - 原数
  return powerOfTwo - 1 - n
}
// @lc code=end

// #region 1
/* 
暴力解法
时间复杂度：$O(log n)$，需要计算n的二进制位数
空间复杂度：$O(1)$，只使用了常数级别的额外空间
 */
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  // 将数字转换为二进制字符串
  const binaryStr = n.toString(2)

  // 翻转每一位
  let complementStr = ''
  for (const bit of binaryStr) {
    complementStr += bit === '0' ? '1' : '0'
  }

  // 转换回十进制
  return parseInt(complementStr, 2)
}
// #endregion

// #region 2
/* 
数学
反码 = 全1数 - 原数
5 (101) + 2 (010) = 7 (111)
10 (1010) + 5 (0101) = 15 (1111)
时间复杂度：$O(log n)$，需要找到大于 n 的最小 2 的幂次
空间复杂度：$O(1)$，只使用了常数级别的额外空间
 */
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  // 特殊情况处理
  if (n === 0) return 1

  // 找到大于 n 的最小 2 的幂次
  let powerOfTwo = 1
  while (powerOfTwo <= n) {
    powerOfTwo <<= 1 // 相当于 powerOfTwo *= 2
  }

  // 全1数 = powerOfTwo - 1
  // 反码 = 全1数 - 原数
  return powerOfTwo - 1 - n
}
// #endregion
