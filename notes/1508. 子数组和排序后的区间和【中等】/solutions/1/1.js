/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  const MOD = 1e9 + 7
  const sums = []
  for (let i = 0; i < n; i++) {
    let s = 0
    for (let j = i; j < n; j++) {
      s += nums[j]
      sums.push(s)
    }
  }
  sums.sort((a, b) => a - b)
  let res = 0
  for (let i = left - 1; i < right; i++) res = (res + sums[i]) % MOD
  return res
}
