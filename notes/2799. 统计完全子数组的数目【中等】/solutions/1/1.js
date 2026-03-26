/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const total = new Set(nums).size
  let ans = 0,
    left = 0
  const cnt = new Map()
  for (let right = 0; right < nums.length; right++) {
    cnt.set(nums[right], (cnt.get(nums[right]) || 0) + 1)
    while (cnt.size === total) {
      ans += nums.length - right
      const v = cnt.get(nums[left])
      if (v === 1) cnt.delete(nums[left])
      else cnt.set(nums[left], v - 1)
      left++
    }
  }
  return ans
}
