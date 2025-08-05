/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const wordCount = new Map()
  let pairs = 0

  for (let word of words) {
    const reversed = word[1] + word[0]

    // 如果反转字符串存在且计数大于 0
    if (wordCount.get(reversed) > 0) {
      pairs++
    } else {
      // 否则增加当前字符串的计数
      wordCount.set(word, (wordCount.get(word) || 0) + 1)
    }
  }

  return pairs
}
