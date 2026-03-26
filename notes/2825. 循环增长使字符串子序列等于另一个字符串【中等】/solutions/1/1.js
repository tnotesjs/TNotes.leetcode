/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
  let j = 0
  for (let i = 0; i < str1.length && j < str2.length; i++) {
    const c = str1.charCodeAt(i) - 97
    const t = str2.charCodeAt(j) - 97
    if (c === t || (c + 1) % 26 === t) j++
  }
  return j === str2.length
}
