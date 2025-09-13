/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 当 n 能被 4 整除时，先手必败；否则先手必胜
  return n % 4 !== 0
}
