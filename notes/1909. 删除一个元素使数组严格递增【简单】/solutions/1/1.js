/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let bad = 0
  const n = nums.length

  for (let i = 1; i < n; i += 1) {
    if (nums[i] <= nums[i - 1]) {
      bad += 1
      if (bad > 1) return false

      const leftOk = i < 2 || nums[i] > nums[i - 2]
      const rightOk = i + 1 >= n || nums[i + 1] > nums[i - 1]
      if (!leftOk && !rightOk) return false
    }
  }

  return true
}
