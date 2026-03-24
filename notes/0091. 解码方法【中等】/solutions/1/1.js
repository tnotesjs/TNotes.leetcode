/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0
  let prev2 = 1,
    prev1 = 1 // prev2 = dp[i-2], prev1 = dp[i-1]

  for (let i = 1; i < s.length; i++) {
    let cur = 0
    if (s[i] !== '0') cur += prev1 // 单独解码
    if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] <= '6')) cur += prev2 // 两位解码
    prev2 = prev1
    prev1 = cur
  }
  return prev1
}
