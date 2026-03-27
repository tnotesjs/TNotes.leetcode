/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let xor = 0
  for (const num of nums) xor ^= num
  // 统计 xor ^ k 中 1 的个数，每个 1 需要一次翻转操作
  xor ^= k
  let cnt = 0
  while (xor) {
    cnt += xor & 1
    xor >>>= 1
  }
  return cnt
}
