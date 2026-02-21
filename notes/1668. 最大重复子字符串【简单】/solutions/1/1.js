/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  const maxTimes = Math.floor(sequence.length / word.length)
  let rep = ""
  let ans = 0

  for (let k = 1; k <= maxTimes; k++) {
    rep += word
    if (sequence.includes(rep)) ans = k
    else break
  }

  return ans
}
