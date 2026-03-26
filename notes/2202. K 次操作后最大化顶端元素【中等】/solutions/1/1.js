/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function (nums, k) {
  const n = nums.length
  if (n === 1) return k % 2 === 0 ? nums[0] : -1
  if (k === 0) return nums[0]
  let maxVal = -1
  if (k - 1 < n) maxVal = nums[k - 1]
  const limit = Math.min(k - 1, n)
  for (let i = 0; i < limit; i++) {
    maxVal = Math.max(maxVal, nums[i])
  }
  return maxVal
}
