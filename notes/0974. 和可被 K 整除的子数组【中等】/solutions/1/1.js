/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  const map = new Map()
  map.set(0, 1) // 前缀和为 0 的余数初始化为 1

  let prefixSum = 0
  let count = 0

  for (const num of nums) {
    prefixSum += num
    // 计算余数，注意处理负数情况
    let remainder = ((prefixSum % k) + k) % k

    // 如果之前出现过相同的余数，说明可以组成若干个子数组
    if (map.has(remainder)) {
      count += map.get(remainder)
    }

    // 更新余数出现次数
    map.set(remainder, (map.get(remainder) || 0) + 1)
  }

  return count
}
