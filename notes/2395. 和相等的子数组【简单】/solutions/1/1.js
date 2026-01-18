/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const sumSet = new Set()

  for (let i = 0; i < nums.length - 1; i++) {
    const sum = nums[i] + nums[i + 1]
    if (sumSet.has(sum)) {
      return true
    }
    sumSet.add(sum)
  }

  return false
}
