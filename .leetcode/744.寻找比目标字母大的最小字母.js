/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (const letter of letters) {
    if (letter > target) {
      return letter
    }
  }
  // 如果没有找到比target大的字符，返回第一个字符
  return letters[0]
}
// @lc code=end
