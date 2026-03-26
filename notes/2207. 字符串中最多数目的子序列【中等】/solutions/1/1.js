/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
  const a = pattern[0],
    b = pattern[1]
  let countA = 0,
    countB = 0,
    pairs = 0
  for (const ch of text) {
    if (ch === b) {
      pairs += countA
      countB++
    }
    if (ch === a) countA++
  }
  return pairs + Math.max(countA, countB)
}
