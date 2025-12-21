/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  const n = nums.length
  // 枚举所有下标对
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (
        j - i >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      ) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}
