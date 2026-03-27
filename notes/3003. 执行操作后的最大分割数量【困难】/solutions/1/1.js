/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPartitionsAfterOperations = function (s, k) {
  if (k >= 26) return 1
  const n = s.length
  const memo = new Map()

  const popcount = (x) => {
    x -= (x >> 1) & 0x55555555
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333)
    return (((x + (x >> 4)) & 0x0f0f0f0f) * 0x01010101) >> 24
  }

  const dp = (i, mask, changed) => {
    if (i === n) return 1
    const key = (i * 134217728 + mask) * 2 + changed
    if (memo.has(key)) return memo.get(key)

    const bit = 1 << (s.charCodeAt(i) - 97)
    const newMask = mask | bit
    let res
    // 不改变当前字符
    if (popcount(newMask) <= k) {
      res = dp(i + 1, newMask, changed)
    } else {
      res = 1 + dp(i + 1, bit, changed)
    }
    // 改变当前字符（如果还没用过机会）
    if (!changed) {
      for (let c = 0; c < 26; c++) {
        const m2 = mask | (1 << c)
        if (popcount(m2) <= k) {
          res = Math.max(res, dp(i + 1, m2, 1))
        } else {
          res = Math.max(res, 1 + dp(i + 1, 1 << c, 1))
        }
      }
    }

    memo.set(key, res)
    return res
  }

  return dp(0, 0, 0)
}
