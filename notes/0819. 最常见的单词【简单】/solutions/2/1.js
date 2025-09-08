/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // 将禁用词转为 Set，提高查找效率
  const bannedSet = new Set(banned)

  // 使用正则提取所有单词（只包含字母），并转为小写
  const words = paragraph.toLowerCase().match(/[a-z]+/g)

  // 用于统计词频
  const freq = {}
  let maxCount = 0
  let result = ''

  for (const word of words) {
    // 跳过禁用词
    if (bannedSet.has(word)) continue

    // 统计频率
    freq[word] = (freq[word] || 0) + 1

    // 实时更新最高频词
    if (freq[word] > maxCount) {
      maxCount = freq[word]
      result = word
    }
  }

  return result
}
