/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 !== 0) return false
  const target = sum / 2

  let bits = 1n // BigInt，dp[0] = 1
  for (const num of nums) {
    bits |= bits << BigInt(num)
  }
  return (bits >> BigInt(target)) & 1n
}
