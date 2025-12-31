/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let ans = 0

  for (let i = 0; i < s.length; ) {
    if (s[i] === 'X') {
      ans += 1
      i += 3 // one operation covers three positions
    } else {
      i += 1
    }
  }

  return ans
}
