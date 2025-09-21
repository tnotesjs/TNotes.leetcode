/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length

  // 枚举可能的子串长度，最长为字符串长度的一半
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    // 只有当字符串长度能被子串长度整除时才可能重复构成
    if (n % i === 0) {
      let pattern = s.substring(0, i)
      let repeated = pattern.repeat(n / i)

      // 检查重复构成的字符串是否与原字符串相同
      if (repeated === s) {
        return true
      }
    }
  }

  return false
}
