/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let breaks = 0
  const n = nums.length

  // 统计降序断点次数，最多允许 1 次
  for (let i = 0; i < n; i += 1) {
    const next = nums[(i + 1) % n] // (i + 1) % n 遇到结尾时，实现环状检查
    if (nums[i] > next) {
      breaks += 1
      if (breaks > 1) return false
    }
  }

  return true
}
