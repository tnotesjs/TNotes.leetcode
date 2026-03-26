/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  const n = s.length
  const total = [0, 0, 0]
  for (const c of s) total[c.charCodeAt(0) - 97]++
  if (total[0] < k || total[1] < k || total[2] < k) return -1

  const cnt = [0, 0, 0]
  let maxWin = 0
  for (let l = 0, r = 0; r < n; r++) {
    cnt[s.charCodeAt(r) - 97]++
    while (
      total[0] - cnt[0] < k ||
      total[1] - cnt[1] < k ||
      total[2] - cnt[2] < k
    ) {
      cnt[s.charCodeAt(l) - 97]--
      l++
    }
    maxWin = Math.max(maxWin, r - l + 1)
  }
  return n - maxWin
}
