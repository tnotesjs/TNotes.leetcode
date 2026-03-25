/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  const MOD = 1e9 + 7
  const map = new Map()
  let res = 0
  for (const d of deliciousness) {
    for (let p = 1; p <= 1 << 21; p <<= 1) {
      if (map.has(p - d)) res = (res + map.get(p - d)) % MOD
    }
    map.set(d, (map.get(d) || 0) + 1)
  }
  return res
}
