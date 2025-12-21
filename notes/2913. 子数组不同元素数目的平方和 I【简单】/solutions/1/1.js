/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  const MOD = 1e9 + 7
  const n = nums.length
  let result = 0
  // 枚举所有子数组
  for (let i = 0; i < n; i++) {
    const set = new Set()
    for (let j = i; j < n; j++) {
      set.add(nums[j])
      // 不同元素数目的平方
      const distinctCount = set.size
      result = (result + distinctCount * distinctCount) % MOD
    }
  }
  return result
}
