/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let maxLen = 1
  let curLen = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curLen++
    } else {
      curLen = 1
    }
    if (curLen > maxLen) maxLen = curLen
  }
  return maxLen
}
