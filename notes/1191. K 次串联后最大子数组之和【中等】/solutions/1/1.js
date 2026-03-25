/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
  const MOD = 1e9 + 7
  const n = arr.length
  const totalSum = arr.reduce((a, b) => a + b, 0)
  let maxSum = 0,
    cur = 0
  const times = Math.min(k, 2)
  for (let t = 0; t < times; t++) {
    for (let i = 0; i < n; i++) {
      cur = Math.max(0, cur) + arr[i]
      maxSum = Math.max(maxSum, cur)
    }
  }
  if (k >= 3 && totalSum > 0) {
    maxSum += (k - 2) * totalSum
  }
  return maxSum % MOD
}
