/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0

  nums.sort((a, b) => a - b)
  let ans = Infinity

  for (let i = k - 1; i < nums.length; i += 1) {
    const diff = nums[i] - nums[i - k + 1]
    if (diff < ans) ans = diff
  }

  return ans
}
