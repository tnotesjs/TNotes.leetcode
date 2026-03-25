/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const MOD = 1e9 + 7
  let res = 0,
    bits = 0
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) bits++
    res = (res * (1 << bits) + i) % MOD
  }
  return res
}
