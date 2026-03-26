/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
  const n = weights.length
  if (k === 1 || k === n) return 0
  const pairs = []
  for (let i = 0; i < n - 1; i++) pairs.push(weights[i] + weights[i + 1])
  pairs.sort((a, b) => a - b)
  let diff = 0
  for (let i = 0; i < k - 1; i++) {
    diff += pairs[pairs.length - 1 - i] - pairs[i]
  }
  return diff
}
