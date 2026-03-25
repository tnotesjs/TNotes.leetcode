/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  const MOD = 1e9 + 7
  let res = 0,
    count = 0
  for (const c of s) {
    count = c === '1' ? count + 1 : 0
    res = (res + count) % MOD
  }
  return res
}
