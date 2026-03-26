/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  const n = s.length
  let res = 0,
    val = 0,
    power = 1
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') {
      res++
    } else {
      // 只有当这个 1 加上去不会超过 k 才取
      if (power <= k && val + power <= k) {
        val += power
        res++
      }
    }
    if (power <= k) power *= 2
  }
  return res
}
