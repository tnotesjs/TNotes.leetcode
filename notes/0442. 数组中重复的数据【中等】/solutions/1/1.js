/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const res = []
  for (const num of nums) {
    const idx = Math.abs(num) - 1
    if (nums[idx] < 0) res.push(idx + 1)
    else nums[idx] = -nums[idx]
  }
  return res
}
