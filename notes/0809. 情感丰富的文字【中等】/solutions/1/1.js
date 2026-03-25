/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let res = 0
  for (const word of words) {
    if (isStretchy(s, word)) res++
  }
  return res
}

function isStretchy(s, word) {
  let i = 0,
    j = 0
  while (i < s.length && j < word.length) {
    if (s[i] !== word[j]) return false
    let lenS = 1,
      lenW = 1
    while (i + lenS < s.length && s[i + lenS] === s[i]) lenS++
    while (j + lenW < word.length && word[j + lenW] === word[j]) lenW++
    if (lenS < lenW || (lenS > lenW && lenS < 3)) return false
    i += lenS
    j += lenW
  }
  return i === s.length && j === word.length
}
