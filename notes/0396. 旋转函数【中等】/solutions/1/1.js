/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const n = nums.length
  let sum = 0,
    f = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    f += i * nums[i]
  }
  let max = f
  for (let i = n - 1; i >= 1; i--) {
    f = f + sum - n * nums[i]
    max = Math.max(max, f)
  }
  return max
}
