/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  const n = s.length
  let count = 0

  // 枚举所有子字符串
  for (let i = 0; i < n; i++) {
    let zeros = 0
    let ones = 0
    for (let j = i; j < n; j++) {
      if (s[j] === '0') zeros++
      else ones++

      // 满足 k 约束：0 的数量 <= k 或 1 的数量 <= k
      if (zeros <= k || ones <= k) {
        count++
      }
    }
  }

  return count
}
