/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  // 预先定义可能的质数集合
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])

  let result = 0
  for (let i = left; i <= right; i++) {
    // 使用位运算计算1的个数
    const onesCount = bitCount(i)
    if (primes.has(onesCount)) {
      result++
    }
  }

  return result
}

// 计算一个数二进制表示中1的个数（Brian Kernighan算法）
const bitCount = (num) => {
  let count = 0
  while (num) {
    count++
    num &= num - 1 // 清除最低位的1
  }
  return count
}
// @lc code=end
