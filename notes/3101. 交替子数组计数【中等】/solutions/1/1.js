/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function(nums) {
  const n = nums.length
  let count = 0
  let len = 1
  count = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      len++
    } else {
      len = 1
    }
    count += len
  }
  return count
}
