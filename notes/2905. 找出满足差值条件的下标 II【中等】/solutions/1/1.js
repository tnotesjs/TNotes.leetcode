/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
  const n = nums.length
  let minIdx = 0, maxIdx = 0
  for (let i = indexDifference; i < n; i++) {
    const j = i - indexDifference
    if (nums[j] < nums[minIdx]) minIdx = j
    if (nums[j] > nums[maxIdx]) maxIdx = j
    if (Math.abs(nums[i] - nums[minIdx]) >= valueDifference) return [minIdx, i]
    if (Math.abs(nums[i] - nums[maxIdx]) >= valueDifference) return [maxIdx, i]
  }
  return [-1, -1]
}
