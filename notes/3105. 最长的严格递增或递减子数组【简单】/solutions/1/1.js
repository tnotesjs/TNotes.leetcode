/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  const n = nums.length
  let maxLen = 1
  let incLen = 1 // 当前递增子数组长度
  let decLen = 1 // 当前递减子数组长度

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      incLen++
      decLen = 1
    } else if (nums[i] < nums[i - 1]) {
      decLen++
      incLen = 1
    } else {
      incLen = 1
      decLen = 1
    }
    maxLen = Math.max(maxLen, incLen, decLen)
  }

  return maxLen
}
