/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balance = 0
  let res = 0

  for (const ch of s) {
    balance += ch === 'L' ? 1 : -1
    if (balance === 0) res += 1
  }

  return res
}
