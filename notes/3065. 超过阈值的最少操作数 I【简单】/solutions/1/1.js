/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // 统计小于 k 的元素个数
  let count = 0
  for (const num of nums) {
    if (num < k) {
      count++
    }
  }
  return count
}
