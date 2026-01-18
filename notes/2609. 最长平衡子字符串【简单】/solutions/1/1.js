/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let maxLen = 0
  let zeroCount = 0 // 当前连续0的数量
  let oneCount = 0 // 当前连续1的数量

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      // 如果前面是1，重置计数器
      if (oneCount > 0) {
        zeroCount = 1
        oneCount = 0
      } else {
        zeroCount++
      }
    } else {
      // s[i] === '1'
      oneCount++
      // 计算平衡子字符串长度
      const balancedLen = Math.min(zeroCount, oneCount) * 2
      maxLen = Math.max(maxLen, balancedLen)
    }
  }

  return maxLen
}
