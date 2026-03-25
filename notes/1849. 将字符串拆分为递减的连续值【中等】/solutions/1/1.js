/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function (s) {
  function dfs(idx, prev, count) {
    if (idx === s.length) return count >= 2
    let num = 0n
    for (let i = idx; i < s.length; i++) {
      num = num * 10n + BigInt(s[i])
      if (num >= 10n ** 18n) break // 防止溢出
      if (prev === -1n || num === prev - 1n) {
        if (dfs(i + 1, num, count + 1)) return true
      }
    }
    return false
  }
  return dfs(0, -1n, 0)
}
