/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b)
  let res = 1,
    start = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - start > k) {
      res++
      start = nums[i]
    }
  }
  return res
}
