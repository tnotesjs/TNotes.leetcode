/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b)
  let ans = 1,
    left = 0,
    sum = 0
  for (let right = 1; right < nums.length; right++) {
    // 需要的总操作次数增量
    sum += (nums[right] - nums[right - 1]) * (right - left)
    while (sum > k) {
      sum -= nums[right] - nums[left]
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
