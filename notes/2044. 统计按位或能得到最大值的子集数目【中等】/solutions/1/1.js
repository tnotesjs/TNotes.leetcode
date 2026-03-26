/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  const n = nums.length
  let maxOr = 0
  for (const num of nums) maxOr |= num
  let count = 0
  for (let mask = 1; mask < 1 << n; mask++) {
    let or_ = 0
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) or_ |= nums[i]
    }
    if (or_ === maxOr) count++
  }
  return count
}
