/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
  // 相邻和 mod k = r 的最长子序列
  // dp[r][v] = 以余数为 v 的元素结尾，相邻和 mod k = r 的最长长度
  let res = 0
  for (let r = 0; r < k; r++) {
    const dp = new Map()
    for (const x of nums) {
      const v = x % k
      const need = ((r - v) % k + k) % k
      const prev = dp.get(need) || 0
      dp.set(v, Math.max(dp.get(v) || 0, prev + 1))
    }
    for (const len of dp.values()) res = Math.max(res, len)
  }
  return res
}
