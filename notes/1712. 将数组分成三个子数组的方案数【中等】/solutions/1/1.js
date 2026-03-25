/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
  const MOD = 1e9 + 7
  const n = nums.length
  const pre = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i]
  let res = 0
  for (let i = 1; i < n - 1; i++) {
    const leftSum = pre[i]
    if (leftSum * 3 > pre[n]) break
    // 二分找 j 的最小值: pre[j] - pre[i] >= pre[i]
    let lo = i + 1,
      hi = n - 1
    while (lo < hi) {
      const mid = (lo + hi) >> 1
      if (pre[mid] - pre[i] < leftSum) lo = mid + 1
      else hi = mid
    }
    const jMin = lo
    // 二分找 j 的最大值: pre[j] - pre[i] <= pre[n] - pre[j]
    lo = jMin
    hi = n - 1
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1
      if (pre[mid] - pre[i] <= pre[n] - pre[mid]) lo = mid
      else hi = mid - 1
    }
    const jMax = lo
    if (jMax >= jMin) res = (res + jMax - jMin + 1) % MOD
  }
  return res
}
