/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  // 将allowed字符串转换为Set，便于快速查找
  const allowedSet = new Set(allowed)

  let count = 0

  // 遍历每个单词
  for (let word of words) {
    // 假设当前单词是一致字符串
    let isConsistent = true

    // 检查单词中的每个字符
    for (let char of word) {
      // 如果字符不在允许的集合中，则不是一致字符串
      if (!allowedSet.has(char)) {
        isConsistent = false
        break
      }
    }

    // 如果是一致字符串，计数加1
    if (isConsistent) {
      count++
    }
  }

  return count
}
// @lc code=end
