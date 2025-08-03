/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // 将禁用单词列表转换为 Set，提高查找效率
  const bannedSet = new Set(banned)

  // 使用正则表达式提取所有单词并转换为小写
  const words = paragraph.toLowerCase().match(/[a-z]+/g) || []

  // 使用哈希表统计每个非禁用单词的出现次数
  const wordCount = new Map()
  for (const word of words) {
    if (!bannedSet.has(word)) {
      wordCount.set(word, (wordCount.get(word) || 0) + 1)
    }
  }

  // 找出出现次数最多的单词
  let maxCount = 0
  let result = ''

  for (const [word, count] of wordCount) {
    if (count > maxCount) {
      maxCount = count
      result = word
    }
  }

  return result
}
// @lc code=end

// test
mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
  'hit',
])
