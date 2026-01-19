/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (i % 10 === nums[i]) return i
  }
  return -1
}

// 提交于 2026.01.19 21:13
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 55.89MB 击败 100.00%
