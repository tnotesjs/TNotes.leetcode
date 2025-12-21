/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
  let maxXor = 0
  const n = nums.length
  // 枚举所有数对
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const x = nums[i]
      const y = nums[j]
      // 检查是否为强数对：|x - y| <= min(x, y)
      if (Math.abs(x - y) <= Math.min(x, y)) {
        maxXor = Math.max(maxXor, x ^ y)
      }
    }
  }
  return maxXor
}
