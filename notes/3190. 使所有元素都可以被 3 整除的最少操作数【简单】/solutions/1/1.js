/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let count = 0
  for (const num of nums) {
    const remainder = num % 3
    // 余数为 0 不需要操作
    // 余数为 1 需要 -1（1 次操作）
    // 余数为 2 需要 +1（1 次操作）
    if (remainder !== 0) {
      count++
    }
  }
  return count
}
