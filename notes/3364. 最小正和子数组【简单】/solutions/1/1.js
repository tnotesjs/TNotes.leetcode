/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
  const n = nums.length
  // 构建前缀和数组
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }

  let minSum = Infinity

  // 枚举所有长度在 [l, r] 范围内的子数组
  for (let len = l; len <= r; len++) {
    for (let i = 0; i + len <= n; i++) {
      const sum = prefix[i + len] - prefix[i]
      if (sum > 0) {
        minSum = Math.min(minSum, sum)
      }
    }
  }

  return minSum === Infinity ? -1 : minSum
}
