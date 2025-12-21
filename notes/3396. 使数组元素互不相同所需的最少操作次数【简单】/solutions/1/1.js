/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const n = nums.length
  const seen = new Set()

  // 从后往前遍历，找到第一个重复元素的位置
  for (let i = n - 1; i >= 0; i--) {
    if (seen.has(nums[i])) {
      // 需要移除前 i+1 个元素，每次移除 3 个
      return Math.floor(i / 3) + 1
    }
    seen.add(nums[i])
  }

  return 0
}
