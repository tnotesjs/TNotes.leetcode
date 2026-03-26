/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    const next = []
    for (let i = 0; i < nums.length - 1; i++) {
      next.push((nums[i] + nums[i + 1]) % 10)
    }
    nums = next
  }
  return nums[0]
}
