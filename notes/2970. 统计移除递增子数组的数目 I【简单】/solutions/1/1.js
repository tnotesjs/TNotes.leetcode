/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  const n = nums.length
  let count = 0

  // 检查数组是否严格递增
  const isStrictlyIncreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) return false
    }
    return true
  }

  // 枚举所有子数组 [i, j]
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 移除 [i, j] 后的剩余数组
      const remaining = [...nums.slice(0, i), ...nums.slice(j + 1)]
      if (isStrictlyIncreasing(remaining)) {
        count++
      }
    }
  }
  return count
}
