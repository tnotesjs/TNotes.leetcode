/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
  const n = s.length
  let i = 0

  // 分组统计连续相同字符的长度
  while (i < n) {
    let j = i
    // 找到连续相同字符的结束位置
    while (j < n && s[j] === s[i]) {
      j++
    }
    // 连续相同字符的长度
    const len = j - i
    // 如果长度恰好为 k，则满足条件
    if (len === k) return true
    i = j
  }

  return false
}
