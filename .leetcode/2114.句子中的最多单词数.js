/*
 * @lc app=leetcode.cn id=2114 lang=javascript
 *
 * [2114] 句子中的最多单词数
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxWords = 0

  for (let i = 0; i < sentences.length; i++) {
    maxWords = Math.max(maxWords, sentences[i].split(' ').length)
  }

  return maxWords
}
// @lc code=end
