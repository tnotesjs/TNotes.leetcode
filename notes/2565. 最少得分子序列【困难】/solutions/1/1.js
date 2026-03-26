/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function (s, t) {
  const n = s.length, m = t.length
  const suf = new Array(n + 1)
  suf[n] = m
  for (let i = n - 1; i >= 0; i--) {
    suf[i] = suf[i + 1]
    if (suf[i] > 0 && s[i] === t[suf[i] - 1]) suf[i]--
  }
  let ans = suf[0]
  let j = 0
  for (let i = 0; i < n; i++) {
    if (j < m && s[i] === t[j]) {
      j++
      ans = Math.min(ans, Math.max(0, suf[i + 1] - j))
    }
  }
  return ans
}
