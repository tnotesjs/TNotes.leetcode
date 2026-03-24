/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProd = nums[0],
    curMax = nums[0],
    curMin = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [curMax, curMin] = [curMin, curMax]
    curMax = Math.max(nums[i], curMax * nums[i])
    curMin = Math.min(nums[i], curMin * nums[i])
    maxProd = Math.max(maxProd, curMax)
  }
  return maxProd
}
