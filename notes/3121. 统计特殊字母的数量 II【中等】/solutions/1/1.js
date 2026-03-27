/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  // 特殊字母：同时存在大小写，且所有小写都在所有大写之前
  const firstUpper = new Array(26).fill(Infinity)
  const lastLower = new Array(26).fill(-1)
  for (let i = 0; i < word.length; i++) {
    const c = word[i]
    if (c >= 'a' && c <= 'z') {
      lastLower[c.charCodeAt(0) - 97] = i
    } else {
      const idx = c.charCodeAt(0) - 65
      firstUpper[idx] = Math.min(firstUpper[idx], i)
    }
  }
  let count = 0
  for (let i = 0; i < 26; i++) {
    if (lastLower[i] !== -1 && firstUpper[i] !== Infinity && lastLower[i] < firstUpper[i]) {
      count++
    }
  }
  return count
}
