/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  const solve = (ch) => {
    let left = 0,
      flips = 0,
      res = 0
    for (let right = 0; right < answerKey.length; right++) {
      if (answerKey[right] !== ch) flips++
      while (flips > k) {
        if (answerKey[left] !== ch) flips--
        left++
      }
      res = Math.max(res, right - left + 1)
    }
    return res
  }
  return Math.max(solve('T'), solve('F'))
}
