/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0
  let j = 0
  const res = []

  // 交替追加两个字符串的当前字符
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      res.push(word1[i])
      i += 1
    }
    if (j < word2.length) {
      res.push(word2[j])
      j += 1
    }
  }

  return res.join('')
}
