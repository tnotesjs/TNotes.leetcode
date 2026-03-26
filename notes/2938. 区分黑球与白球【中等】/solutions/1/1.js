/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let ans = 0, blacks = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') blacks++
    else ans += blacks
  }
  return ans
}
