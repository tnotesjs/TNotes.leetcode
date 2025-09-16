/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return words.filter((word) =>
    /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(word)
  )
}
// @lc code=end
