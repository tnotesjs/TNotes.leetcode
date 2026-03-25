/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  const MOD = 1e9 + 7
  let res = 0,
    cnt = 1
  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === s[i - 1]) cnt++
    else {
      res = (res + (cnt * (cnt + 1)) / 2) % MOD
      cnt = 1
    }
  }
  return res
}
