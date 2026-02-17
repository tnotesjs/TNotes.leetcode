/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const first = new Array(26).fill(-1)
  let ans = -1

  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97
    if (first[idx] === -1) first[idx] = i
    else ans = Math.max(ans, i - first[idx] - 1)
  }

  return ans
}
