/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // 计算数组总和对 k 取模的结果
  // 这就是需要减少的最小次数
  let sum = 0
  for (const num of nums) {
    sum += num
  }
  return sum % k
}
