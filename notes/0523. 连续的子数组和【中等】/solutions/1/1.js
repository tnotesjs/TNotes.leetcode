/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const n = nums.length
  if (n < 2) return false

  const map = new Map()
  // 初始化，前缀和余数为 0 的下标为 -1，为了处理从下标 0 开始的子数组
  map.set(0, -1)

  let prefixSum = 0

  for (let i = 0; i < n; i++) {
    prefixSum += nums[i]

    // 计算余数，同余定理：
    // (sum[i] - sum[j]) % k == 0  =>  sum[i] % k == sum[j] % k
    const remainder = prefixSum % k

    // 如果余数已经出现过
    if (map.has(remainder)) {
      const prevIndex = map.get(remainder)
      // 题目要求子数组长度至少为 2
      if (i - prevIndex >= 2) {
        return true
      }
    } else {
      // 只有当余数不存在时才存入，因为我们需要保持这个余数对应的下标尽可能小
      // 这样 i - prevIndex 才更容易 >= 2
      map.set(remainder, i)
    }
  }

  return false
}
