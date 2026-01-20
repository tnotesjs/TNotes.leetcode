/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let bad = 0
  const n = nums.length

  for (let i = 1; i < n; i += 1) {
    // 检查是否出现了递减
    if (nums[i] <= nums[i - 1]) {
      // 统计递减片段的出现次数
      bad += 1
      if (bad > 1) return false

      // 方案1：判断删除 nums[i - 1] 是否可行
      const leftOk = i < 2 || nums[i] > nums[i - 2]
      // 方案2：判断删除 nums[i] 是否可行
      const rightOk = i + 1 >= n || nums[i + 1] > nums[i - 1]
      // 两个方案均不满足，直接返回 false
      if (!leftOk && !rightOk) return false
    }
  }

  return true
}
