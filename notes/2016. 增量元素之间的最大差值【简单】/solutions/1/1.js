/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let min = nums[0]
  let ans = -1

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > min) {
      ans = Math.max(ans, nums[i] - min)
    } else {
      min = nums[i]
    }
  }

  return ans
}
