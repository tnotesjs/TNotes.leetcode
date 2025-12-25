/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = nums.length - 1; i >= 2; i--) {
    const a = nums[i - 2]
    const b = nums[i - 1]
    const c = nums[i]
    if (a + b > c) return a + b + c
  }
  return 0
}
