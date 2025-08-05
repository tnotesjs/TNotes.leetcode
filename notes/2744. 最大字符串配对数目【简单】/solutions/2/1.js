/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let pairs = 0
  const seen = new Set() // 记录已经见过的字符串

  for (let word of words) {
    const reversed = word[1] + word[0]

    // 如果反转后的字符串已经见过，说明可以配对
    if (seen.has(reversed)) {
      pairs++
    } else {
      // 否则将当前字符串加入集合
      seen.add(word)
    }
  }

  return pairs
}
