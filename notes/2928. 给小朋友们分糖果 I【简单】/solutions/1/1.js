/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let count = 0
  // 枚举第一位小朋友分到的糖果数
  for (let i = 0; i <= Math.min(n, limit); i++) {
    // 枚举第二位小朋友分到的糖果数
    for (let j = 0; j <= Math.min(n - i, limit); j++) {
      // 第三位小朋友分到剩余的糖果
      const k = n - i - j
      if (k >= 0 && k <= limit) count++
    }
  }
  return count
}
