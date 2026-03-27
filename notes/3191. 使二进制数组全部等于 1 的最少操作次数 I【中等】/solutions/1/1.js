/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const n = nums.length
  let ops = 0
  for (let i = 0; i <= n - 3; i++) {
    if (nums[i] === 0) {
      nums[i] ^= 1
      nums[i + 1] ^= 1
      nums[i + 2] ^= 1
      ops++
    }
  }
  return nums[n - 1] === 1 && nums[n - 2] === 1 ? ops : -1
}
