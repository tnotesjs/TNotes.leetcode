/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // 建立字符到索引的映射
  const charOrder = {}
  for (let i = 0; i < order.length; i++) {
    charOrder[order[i]] = i
  }

  // 检查两个单词是否按外星语顺序排列
  const isCorrectOrder = (word1, word2) => {
    const minLength = Math.min(word1.length, word2.length)

    // 逐字符比较
    for (let i = 0; i < minLength; i++) {
      const order1 = charOrder[word1[i]]
      const order2 = charOrder[word2[i]]

      if (order1 < order2) {
        return true
      }
      if (order1 > order2) {
        return false
      }
    }

    // 如果前面的字符都相同，则比较长度
    return word1.length <= word2.length
  }

  // 检查所有相邻单词对
  for (let i = 0; i < words.length - 1; i++) {
    if (!isCorrectOrder(words[i], words[i + 1])) {
      return false
    }
  }

  return true
}
// @lc code=end
