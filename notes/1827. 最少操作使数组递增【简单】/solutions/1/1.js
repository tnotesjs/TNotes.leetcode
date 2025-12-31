/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ops = 0
  let prev = nums[0]

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] <= prev) {
      const target = prev + 1
      ops += target - nums[i]
      prev = target
    } else {
      prev = nums[i]
    }
  }

  return ops
}
