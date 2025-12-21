/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
  const n = nums.length
  let sum = 0

  for (let i = 0; i < n; i++) {
    // 检查是否为好数字
    const left = i - k >= 0 ? nums[i - k] : -Infinity
    const right = i + k < n ? nums[i + k] : -Infinity

    if (nums[i] > left && nums[i] > right) {
      sum += nums[i]
    }
  }

  return sum
}
