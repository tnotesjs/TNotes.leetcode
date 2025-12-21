/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  // 将所有长度为 2 的子串存入哈希表
  const set = new Set()
  for (let i = 0; i + 1 < s.length; i++) {
    set.add(s[i] + s[i + 1])
  }
  // 检查反转后的子串是否存在
  for (let i = 0; i + 1 < s.length; i++) {
    // s[i] + s[i+1] 的反转是 s[i+1] + s[i]
    if (set.has(s[i + 1] + s[i])) {
      return true
    }
  }
  return false
}
