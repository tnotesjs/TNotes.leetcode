/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOrAfterOperations = function(nums, k) {
  const n = nums.length
  let ans = 0
  // 从高位到低位贪心
  for (let bit = 29; bit >= 0; bit--) {
    const target = ans | ((1 << bit) - 1)
    let ops = 0
    let cur = ~0
    for (let i = 0; i < n; i++) {
      cur &= nums[i]
      if ((cur & ~target) === 0) {
        ops++
        cur = ~0
      }
    }
    const needed = n - ops
    if (needed > k) {
      ans |= (1 << bit)
    }
  }
  return ans
}
