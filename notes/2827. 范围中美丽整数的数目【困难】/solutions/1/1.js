/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function(low, high, k) {
  const count = (num) => {
    if (num <= 0) return 0
    const s = String(num)
    const n = s.length
    const memo = new Map()
    const dp = (pos, tight, mod, diff, started) => {
      if (pos === n) return started && mod === 0 && diff === 0 ? 1 : 0
      const key = `${pos},${tight},${mod},${diff},${started}`
      if (memo.has(key)) return memo.get(key)
      const limit = tight ? +s[pos] : 9
      let res = 0
      for (let d = 0; d <= limit; d++) {
        const nt = tight && d === limit
        if (!started && d === 0) {
          res += dp(pos + 1, nt, 0, 0, false)
        } else {
          const nm = (mod * 10 + d) % k
          const nd = diff + (d % 2 === 0 ? 1 : -1)
          res += dp(pos + 1, nt, nm, nd, true)
        }
      }
      memo.set(key, res)
      return res
    }
    return dp(0, true, 0, 0, false)
  }
  return count(high) - count(low - 1)
}
