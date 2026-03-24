/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const count = new Array(26).fill(0)
  let left = 0,
    maxFreq = 0,
    res = 0
  for (let right = 0; right < s.length; right++) {
    count[s.charCodeAt(right) - 65]++
    maxFreq = Math.max(maxFreq, count[s.charCodeAt(right) - 65])
    if (right - left + 1 - maxFreq > k) {
      count[s.charCodeAt(left) - 65]--
      left++
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
