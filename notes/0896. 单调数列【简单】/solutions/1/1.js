/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  const n = nums.length
  if (n <= 2) return true

  let inc = true // 递增标志
  let dec = true // 递减标志

  for (let i = 1; i < n; i++) {
    // 非递减
    if (nums[i] > nums[i - 1]) dec = false
    // 非递增
    if (nums[i] < nums[i - 1]) inc = false
    // 既非递增也非递减，意味着 nums 不具备单调性
    if (!inc && !dec) return false
  }
  return true
}
