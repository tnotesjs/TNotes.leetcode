/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  // f[j] = 以值 j+1 结尾的最长非递减子序列长度
  const f = [0, 0, 0]
  for (const x of nums) {
    if (x === 1) f[0]++
    else if (x === 2) f[1] = Math.max(f[0], f[1]) + 1
    else f[2] = Math.max(f[0], f[1], f[2]) + 1
  }
  return nums.length - Math.max(f[0], f[1], f[2])
}
