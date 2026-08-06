/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0
  let sum = 0
  let ans = Infinity

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      ans = Math.min(ans, right - left + 1)
      sum -= nums[left++]
    }
  }

  return ans === Infinity ? 0 : ans
}
