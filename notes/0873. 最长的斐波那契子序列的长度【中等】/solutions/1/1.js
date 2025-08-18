/**
 * 找到数组中最长的斐波那契子序列的长度
 * 斐波那契子序列：满足斐波那契规律的子序列，即 arr[i] + arr[j] = arr[k] (i < j < k)
 * @param {number[]} arr - 严格递增的正整数数组
 * @return {number} 最长斐波那契子序列的长度
 */
var lenLongestFibSubseq = function (arr) {
  const n = arr.length
  // 使用 Map 存储值到索引的映射，便于快速查找
  const indexMap = new Map()
  for (let i = 0; i < n; i++) {
    indexMap.set(arr[i], i)
  }

  // dp[i][j] 表示以 arr[i] 和 arr[j] 作为最后两个元素的斐波那契子序列的长度
  const dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(2))

  let maxLen = 0

  // 遍历所有可能的斐波那契序列的最后两个元素
  for (let k = 2; k < n; k++) {
    for (let j = 1; j < k; j++) {
      // 计算前一个元素的值
      const prev = arr[k] - arr[j]

      // 检查这个值是否存在于数组中，并且索引小于 j
      if (indexMap.has(prev)) {
        const i = indexMap.get(prev)
        if (i < j) {
          // 更新以 arr[i] 和 arr[j] 作为最后两个元素的斐波那契子序列的长度
          dp[j][k] = dp[i][j] + 1
          maxLen = Math.max(maxLen, dp[j][k])
        }
      }
    }
  }

  // 如果最大长度小于3，说明没有找到有效的斐波那契子序列
  return maxLen >= 3 ? maxLen : 0
}
