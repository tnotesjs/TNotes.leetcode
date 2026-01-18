/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = Math.max(...nums)

  // 检查长度是否为 n + 1
  if (nums.length !== n + 1) return false

  // 排序
  nums.sort((a, b) => a - b)

  // 检查前 n-1 个元素是否为 1, 2, ..., n-1
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] !== i + 1) return false
  }

  // 检查最后两个元素是否都是 n
  return nums[n - 1] === n && nums[n] === n
}
