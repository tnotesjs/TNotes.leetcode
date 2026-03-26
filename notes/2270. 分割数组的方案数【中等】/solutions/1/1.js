/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const n = nums.length
  let total = 0
  for (let i = 0; i < n; i++) total += nums[i]
  let left = 0,
    res = 0
  for (let i = 0; i < n - 1; i++) {
    left += nums[i]
    if (left >= total - left) res++
  }
  return res
}
