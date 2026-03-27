/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
  const n = word.length
  const map = new Map()
  let maxFreq = 0
  for (let i = 0; i < n; i += k) {
    const sub = word.substring(i, i + k)
    const freq = (map.get(sub) || 0) + 1
    map.set(sub, freq)
    maxFreq = Math.max(maxFreq, freq)
  }
  return n / k - maxFreq
}
