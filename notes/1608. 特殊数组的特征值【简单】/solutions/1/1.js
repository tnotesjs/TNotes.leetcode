/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length

  for (let i = 0; i < n; i++) {
    const x = n - i
    const prev = i === 0 ? -Infinity : nums[i - 1]
    if (nums[i] >= x && prev < x) return x
  }

  return -1
}
