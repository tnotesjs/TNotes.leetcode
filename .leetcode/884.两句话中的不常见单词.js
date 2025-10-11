/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  // 将两个句子拆分成单词数组并合并
  const words = [...s1.split(' '), ...s2.split(' ')]

  // 统计每个单词出现的次数
  const wordCount = {}
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1
  }

  // 找出只出现一次的单词
  const result = []
  for (const word in wordCount) {
    if (wordCount[word] === 1) {
      result.push(word)
    }
  }

  return result
}
// @lc code=end
