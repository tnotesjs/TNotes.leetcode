/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function (word) {
  let ans = 0,
    count = 1,
    distinct = 1
  for (let i = 1; i < word.length; i++) {
    if (word[i] >= word[i - 1]) {
      count++
      if (word[i] > word[i - 1]) distinct++
    } else {
      count = 1
      distinct = 1
    }
    if (distinct === 5) ans = Math.max(ans, count)
  }
  return ans
}
