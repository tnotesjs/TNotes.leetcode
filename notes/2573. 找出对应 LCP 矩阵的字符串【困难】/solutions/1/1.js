/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function (lcp) {
  const n = lcp.length
  const s = new Array(n).fill(-1)
  let c = 0
  for (let i = 0; i < n; i++) {
    if (s[i] >= 0) continue
    if (c >= 26) return ""
    s[i] = c
    for (let j = i + 1; j < n; j++) {
      if (lcp[i][j] > 0 && s[j] < 0) s[j] = c
    }
    c++
  }
  // 验证 LCP 矩阵
  const chk = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === s[j]) chk[i][j] = chk[i + 1][j + 1] + 1
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (chk[i][j] !== lcp[i][j]) return ""
    }
  }
  return s.map((c) => String.fromCharCode(97 + c)).join("")
}
