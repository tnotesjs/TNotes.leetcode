/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // 统计每个字符出现的次数
  const charCount = {}
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  let length = 0
  let hasOdd = false

  // 计算回文串的最大长度
  for (let count of Object.values(charCount)) {
    if (count % 2 === 0) {
      // 偶数次字符全部使用
      length += count
    } else {
      // 奇数次字符使用 count - 1 个
      length += count - 1
      hasOdd = true
    }
  }

  // 如果有奇数次字符，可以在中心放一个，且只能放一个
  if (hasOdd) {
    length += 1
  }

  return length
}
