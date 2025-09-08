/*
 * @lc app=leetcode.cn id=2085 lang=javascript
 *
 * [2085] 统计出现过一次的公共字符串
 */

// @lc code=start
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  // 只统计在各自数组中出现一次的字符串
  const unique1 = new Set()
  const duplicate1 = new Set()

  // 处理 words1
  for (let word of words1) {
    if (unique1.has(word)) {
      // 如果已经出现过，移到重复集合中
      unique1.delete(word)
      duplicate1.add(word)
    } else if (!duplicate1.has(word)) {
      // 如果既没出现过也不是重复的，添加到唯一集合
      unique1.add(word)
    }
  }

  // 同样处理 words2
  const unique2 = new Set()
  const duplicate2 = new Set()

  for (let word of words2) {
    if (unique2.has(word)) {
      unique2.delete(word)
      duplicate2.add(word)
    } else if (!duplicate2.has(word)) {
      unique2.add(word)
    }
  }

  // 统计在两个数组中都唯一出现的字符串数量
  let result = 0
  for (let word of unique1) {
    if (unique2.has(word)) {
      result++
    }
  }

  return result
}
// @lc code=end
