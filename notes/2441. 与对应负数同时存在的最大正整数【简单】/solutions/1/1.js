/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const set = new Set(nums)
  let maxK = -1

  for (const num of nums) {
    if (num > 0 && set.has(-num)) {
      maxK = Math.max(maxK, num)
    }
  }

  return maxK
}
