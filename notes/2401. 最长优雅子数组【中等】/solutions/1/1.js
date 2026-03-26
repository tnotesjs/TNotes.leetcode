/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let used = 0,
    left = 0,
    ans = 0
  for (let right = 0; right < nums.length; right++) {
    while (used & nums[right]) {
      used ^= nums[left++]
    }
    used |= nums[right]
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
