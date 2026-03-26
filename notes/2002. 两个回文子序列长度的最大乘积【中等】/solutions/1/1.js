/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
  const n = s.length
  const total = 1 << n
  const palinLen = new Array(total).fill(0)
  for (let mask = 1; mask < total; mask++) {
    let sub = ''
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) sub += s[i]
    }
    let l = 0,
      r = sub.length - 1,
      ok = true
    while (l < r) {
      if (sub[l] !== sub[r]) {
        ok = false
        break
      }
      l++
      r--
    }
    palinLen[mask] = ok ? sub.length : 0
  }
  let ans = 0
  for (let m1 = 1; m1 < total; m1++) {
    if (!palinLen[m1]) continue
    for (
      let m2 = (total - 1) ^ m1;
      m2 > 0;
      m2 = (m2 - 1) & ((total - 1) ^ m1)
    ) {
      if (palinLen[m2]) {
        ans = Math.max(ans, palinLen[m1] * palinLen[m2])
      }
    }
  }
  return ans
}
