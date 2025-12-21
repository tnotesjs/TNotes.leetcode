/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function (words, groups) {
  const result = [words[0]]
  let lastGroup = groups[0]
  // 贪心选择：只要当前 group 与上一个不同，就选择
  for (let i = 1; i < words.length; i++) {
    if (groups[i] !== lastGroup) {
      result.push(words[i])
      lastGroup = groups[i]
    }
  }
  return result
}
