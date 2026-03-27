/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePalindromeQueries = function (s, queries) {
  const n = s.length,
    m = n / 2
  // h1 = s[0..m-1], h2[i] = s[n-1-i]
  // 前缀和：每个字符的计数
  const pre1 = Array.from({ length: 26 }, () => new Int32Array(m + 1))
  const pre2 = Array.from({ length: 26 }, () => new Int32Array(m + 1))
  const mis = new Int32Array(m + 1) // 不匹配前缀和

  for (let i = 0; i < m; i++) {
    const c1 = s.charCodeAt(i) - 97
    const c2 = s.charCodeAt(n - 1 - i) - 97
    for (let ch = 0; ch < 26; ch++) {
      pre1[ch][i + 1] = pre1[ch][i] + (ch === c1 ? 1 : 0)
      pre2[ch][i + 1] = pre2[ch][i] + (ch === c2 ? 1 : 0)
    }
    mis[i + 1] = mis[i] + (c1 !== c2 ? 1 : 0)
  }

  const cnt1 = (ch, l, r) => pre1[ch][r + 1] - pre1[ch][l]
  const cnt2 = (ch, l, r) => pre2[ch][r + 1] - pre2[ch][l]
  const mismatch = (l, r) => (l > r ? 0 : mis[r + 1] - mis[l])

  const res = []
  for (const [a, b, c, d] of queries) {
    const L = n - 1 - d,
      R = n - 1 - c
    const left = Math.min(a, L),
      right = Math.max(b, R)
    let ok = true

    // 检查联合区间外无不匹配
    if (mismatch(0, left - 1) > 0 || mismatch(right + 1, m - 1) > 0) {
      ok = false
    }

    // 检查间隙（无重叠时）
    if (ok && b < L && mismatch(b + 1, L - 1) > 0) ok = false
    if (ok && R < a && mismatch(R + 1, a - 1) > 0) ok = false

    if (ok) {
      const ol = Math.max(a, L),
        or_ = Math.min(b, R)
      for (let ch = 0; ch < 26; ch++) {
        const h1p = cnt1(ch, a, b),
          h2p = cnt2(ch, L, R)
        let need1, need2
        if (ol > or_) {
          // 无重叠
          need1 = cnt2(ch, a, b)
          need2 = cnt1(ch, L, R)
        } else {
          need1 =
            (a < ol ? cnt2(ch, a, ol - 1) : 0) +
            (or_ < b ? cnt2(ch, or_ + 1, b) : 0)
          need2 =
            (L < ol ? cnt1(ch, L, ol - 1) : 0) +
            (or_ < R ? cnt1(ch, or_ + 1, R) : 0)
        }
        if (h1p < need1 || h2p < need2 || h1p - need1 !== h2p - need2) {
          ok = false
          break
        }
      }
    }
    res.push(ok)
  }
  return res
}
