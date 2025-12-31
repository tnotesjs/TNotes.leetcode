/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let ans = 0

  for (const p of patterns) {
    if (word.includes(p)) ans += 1
  }

  return ans
}
