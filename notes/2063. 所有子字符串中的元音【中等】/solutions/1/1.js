/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const n = word.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    if (vowels.has(word[i])) {
      ans += (i + 1) * (n - i)
    }
  }
  return ans
}
