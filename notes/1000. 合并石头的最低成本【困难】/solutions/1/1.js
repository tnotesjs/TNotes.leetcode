/**
 * @param {number[]} stones
 * @param {number} k
 * @return {number}
 */
var mergeStones = function (stones, k) {
  const n = stones.length
  // 无法合并成一堆的情况：每次合并减少 k-1 堆，最终需要剩 1 堆
  if ((n - 1) % (k - 1) !== 0) return -1

  // 计算前缀和，用于快速获取区间和
  const prefixSum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + stones[i]
  }

  // dp[i][j][p] 表示将 [i, j] 区间合并成 p 堆的最小成本
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Array(k + 1).fill(Infinity)),
  )

  // 初始化：单个石头堆本身就是 1 堆，成本为 0
  for (let i = 0; i < n; i++) {
    dp[i][i][1] = 0
  }

  // 枚举区间长度
  for (let len = 2; len <= n; len++) {
    // 枚举区间起点
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1
      // 枚举合并成 p 堆的情况
      for (let p = 2; p <= k; p++) {
        // 枚举分割点：将 [i, j] 分成 [i, mid] 和 [mid+1, j]
        // [i, mid] 合并成 1 堆，[mid+1, j] 合并成 p-1 堆
        for (let mid = i; mid < j; mid += k - 1) {
          dp[i][j][p] = Math.min(
            dp[i][j][p],
            dp[i][mid][1] + dp[mid + 1][j][p - 1],
          )
        }
      }
      // 将 k 堆合并成 1 堆的成本 = 先合并成 k 堆 + 这 k 堆的总和
      dp[i][j][1] = dp[i][j][k] + (prefixSum[j + 1] - prefixSum[i])
    }
  }

  return dp[0][n - 1][1]
}
