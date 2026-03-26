/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrays = function (nums) {
  let cnt = 0,
    cur = -1 // -1 的二进制全为 1，AND 运算的单位元
  for (const x of nums) {
    cur &= x
    if (cur === 0) {
      cnt++
      cur = -1
    }
  }
  return Math.max(1, cnt)
}
