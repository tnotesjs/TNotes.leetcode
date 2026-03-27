/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }
  // 对于子数组 [i..j]，和 = prefix[j+1] - prefix[i]
  // 条件：|nums[i] - nums[j]| == k
  // 即 nums[j] = nums[i] + k 或 nums[j] = nums[i] - k
  // 对每个值记录最小前缀和的下标
  const minPrefix = new Map()
  let ans = -Infinity
  for (let j = 0; j < n; j++) {
    const v = nums[j]
    // 检查 v - k 和 v + k
    for (const target of [v - k, v + k]) {
      if (minPrefix.has(target)) {
        const sum = prefix[j + 1] - minPrefix.get(target)
        if (sum > ans) ans = sum
      }
    }
    // 更新 v 对应的最小前缀和
    if (!minPrefix.has(v) || prefix[j] < minPrefix.get(v)) {
      minPrefix.set(v, prefix[j])
    }
  }
  return ans === -Infinity ? 0 : ans
}
