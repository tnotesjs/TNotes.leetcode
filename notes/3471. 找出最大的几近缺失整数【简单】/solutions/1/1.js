/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  const n = nums.length
  const subarraySet = new Map() // 记录每个元素出现在哪些子数组中

  // 遍历所有大小为 k 的子数组
  for (let i = 0; i <= n - k; i++) {
    const subarray = nums.slice(i, i + k)
    // 记录这个子数组中出现的每个不同的元素
    const uniqueElements = new Set(subarray)
    for (const num of uniqueElements) {
      if (!subarraySet.has(num)) {
        subarraySet.set(num, new Set())
      }
      subarraySet.get(num).add(i) // 记录子数组的起始位置
    }
  }

  // 找出恰好出现在 1 个子数组中的最大整数
  let result = -1
  for (const [num, subarrays] of subarraySet) {
    if (subarrays.size === 1) {
      result = Math.max(result, num)
    }
  }

  return result
}
