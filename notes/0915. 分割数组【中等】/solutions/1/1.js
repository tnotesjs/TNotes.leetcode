/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let leftMax = nums[0]
  let curMax = nums[0]
  let partitionIdx = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < leftMax) {
      partitionIdx = i
      leftMax = curMax
    } else {
      curMax = Math.max(curMax, nums[i])
    }
  }

  return partitionIdx + 1
}
