/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b)
  const set = new Set()

  let left = 0
  let right = nums.length - 1

  while (left < right) {
    // 使用和来代替平均值，避免浮点数精度问题
    const sum = nums[left] + nums[right]
    set.add(sum)
    left++
    right--
  }

  return set.size
}
