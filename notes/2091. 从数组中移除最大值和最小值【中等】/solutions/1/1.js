/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  const n = nums.length
  let minIdx = 0,
    maxIdx = 0
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[minIdx]) minIdx = i
    if (nums[i] > nums[maxIdx]) maxIdx = i
  }
  let l = Math.min(minIdx, maxIdx)
  let r = Math.max(minIdx, maxIdx)
  // 三种情况：都从左删、都从右删、左右各删一个
  return Math.min(r + 1, n - l, l + 1 + n - r)
}
