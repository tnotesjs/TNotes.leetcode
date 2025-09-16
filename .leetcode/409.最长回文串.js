/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const freq = {}
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1
  }

  let length = 0
  for (let count of Object.values(freq)) {
    length += count - (count % 2) // 加入最大偶数部分
  }

  // 如果还能加一个中心字符（说明有奇数频次字符被截断了）
  return length < s.length ? length + 1 : length
}
// @lc code=end

longestPalindrome('abccccdd')
