/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length
  const r = numRows
  if (r === 1 || r >= n) return s

  const t = r * 2 - 2
  const ans = []

  // 外层枚举行
  for (let i = 0; i < r; i++) {
    // 内层跨周期枚举该行的成员
    for (let j = 0; j < n - i; j += t) {
      ans.push(s[j + i])
      if (
        0 < i && // 同一个周期 t 内，第一行只有一个成员
        i < r - 1 && // 同一个周期 t 内，第 r - 1 行只有一个成员
        j + t - i < n // 确保插入的成员是有效的
      ) {
        ans.push(s[j + t - i])
      }
    }
  }
  return ans.join('')
}
