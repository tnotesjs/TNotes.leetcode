/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const n = s.length
  let left = 0,
    cost = 0,
    ans = 0
  for (let right = 0; right < n; right++) {
    cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
