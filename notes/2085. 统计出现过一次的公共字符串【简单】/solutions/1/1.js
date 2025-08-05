/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  // 统计 words1 中每个字符串的出现次数
  const count1 = new Map()
  for (let word of words1) {
    count1.set(word, (count1.get(word) || 0) + 1)
  }

  // 统计 words2 中每个字符串的出现次数
  const count2 = new Map()
  for (let word of words2) {
    count2.set(word, (count2.get(word) || 0) + 1)
  }

  // 统计满足条件的字符串数量
  let result = 0
  for (let [word, count] of count1) {
    // 在 words1 中出现一次且在 words2 中也出现一次
    if (count === 1 && count2.get(word) === 1) {
      result++
    }
  }

  return result
}
