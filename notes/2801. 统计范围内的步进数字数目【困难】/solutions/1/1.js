/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var countSteppingNumbers = function (low, high) {
  const MOD = 1e9 + 7
  const count = (num) => {
    const n = num.length
    const memo = new Map()
    const dfs = (pos, last, tight, started) => {
      if (pos === n) return started ? 1 : 0
      const k = `${pos},${last},${tight},${started}`
      if (memo.has(k)) return memo.get(k)
      const limit = tight ? +num[pos] : 9
      let res = 0
      for (let d = 0; d <= limit; d++) {
        if (!started && d === 0) {
          res = (res + dfs(pos + 1, -1, tight && d === limit, false)) % MOD
        } else if (!started || Math.abs(d - last) === 1) {
          res = (res + dfs(pos + 1, d, tight && d === limit, true)) % MOD
        }
      }
      memo.set(k, res)
      return res
    }
    return dfs(0, -1, true, false)
  }
  const sub1 = (s) => {
    const arr = s.split('')
    let i = arr.length - 1
    while (i >= 0 && arr[i] === '0') {
      arr[i] = '9'
      i--
    }
    arr[i] = String(+arr[i] - 1)
    let start = 0
    while (start < arr.length - 1 && arr[start] === '0') start++
    return arr.slice(start).join('')
  }
  return (count(high) - count(sub1(low)) + MOD) % MOD
}
