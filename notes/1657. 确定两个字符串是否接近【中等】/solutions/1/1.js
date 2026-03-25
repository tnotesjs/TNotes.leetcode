/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false
  const f1 = new Array(26).fill(0),
    f2 = new Array(26).fill(0)
  for (const c of word1) f1[c.charCodeAt(0) - 97]++
  for (const c of word2) f2[c.charCodeAt(0) - 97]++
  // 字符集合相同
  for (let i = 0; i < 26; i++) if (f1[i] > 0 !== f2[i] > 0) return false
  // 频率集合相同
  f1.sort((a, b) => a - b)
  f2.sort((a, b) => a - b)
  for (let i = 0; i < 26; i++) if (f1[i] !== f2[i]) return false
  return true
}
