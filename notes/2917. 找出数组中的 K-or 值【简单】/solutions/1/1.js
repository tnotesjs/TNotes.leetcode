/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function (nums, k) {
  let result = 0
  // 枚举每一位（0 到 30）
  for (let i = 0; i < 31; i++) {
    let count = 0
    // 统计有多少个数在第 i 位为 1
    for (const num of nums) {
      if ((num >> i) & 1) {
        count++
      }
    }
    // 如果至少有 k 个数的第 i 位为 1，则结果的第 i 位也为 1
    if (count >= k) {
      result |= 1 << i
    }
  }
  return result
}
