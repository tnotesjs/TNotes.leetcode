/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set(nums)
  let count = 0

  for (const num of nums) {
    // 检查 num + diff 和 num + 2*diff 是否都存在
    if (set.has(num + diff) && set.has(num + 2 * diff)) {
      count++
    }
  }

  return count
}
