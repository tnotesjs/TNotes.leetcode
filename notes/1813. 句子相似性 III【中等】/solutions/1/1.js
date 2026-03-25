/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  const a = sentence1.split(' ')
  const b = sentence2.split(' ')
  // 确保 a 是较短的
  if (a.length > b.length) return areSentencesSimilar(sentence2, sentence1)
  let i = 0,
    j = 0
  // 前缀匹配
  while (i < a.length && a[i] === b[i]) i++
  // 后缀匹配
  while (j < a.length - i && a[a.length - 1 - j] === b[b.length - 1 - j]) j++
  return i + j >= a.length
}
