/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const MOD = 1e9 + 7
  arr.sort((a, b) => a - b)
  const dp = new Map()
  let res = 0
  for (const x of arr) {
    dp.set(x, 1)
    for (const a of arr) {
      if (a * a > x) break
      if (x % a === 0 && dp.has(x / a)) {
        const b = x / a
        let cnt = (dp.get(a) * dp.get(b)) % MOD
        if (a !== b) cnt = (cnt * 2) % MOD
        dp.set(x, (dp.get(x) + cnt) % MOD)
      }
    }
    res = (res + dp.get(x)) % MOD
  }
  return res
}
