/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const n = sentence.length

  // 检查首尾字符是否相等
  if (sentence[0] !== sentence[n - 1]) return false

  // 遍历字符串，检查空格前后的字符是否相等
  for (let i = 0; i < n; i++) {
    if (sentence[i] === ' ' && sentence[i - 1] !== sentence[i + 1]) {
      return false
    }
  }

  return true
}
