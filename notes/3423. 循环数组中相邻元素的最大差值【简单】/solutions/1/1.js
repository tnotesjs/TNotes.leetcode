/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  const n = nums.length
  let maxDiff = 0

  for (let i = 0; i < n; i++) {
    // 循环数组，下一个元素的下标是 (i + 1) % n
    const diff = Math.abs(nums[i] - nums[(i + 1) % n])
    maxDiff = Math.max(maxDiff, diff)
  }

  return maxDiff
}
