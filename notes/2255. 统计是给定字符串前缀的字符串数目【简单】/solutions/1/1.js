/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let ans = 0
  for (const w of words) {
    if (s.startsWith(w)) ans += 1
  }
  return ans
}
