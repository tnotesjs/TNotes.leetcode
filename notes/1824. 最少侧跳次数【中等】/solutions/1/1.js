/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
  const n = obstacles.length - 1
  // dp[j] = 到达当前位置第 j 跑道的最少侧跳次数
  let dp = [Infinity, 1, 0, 1] // 初始在第 2 跑道
  for (let i = 1; i <= n; i++) {
    const ndp = [Infinity, Infinity, Infinity, Infinity]
    // 直走
    for (let j = 1; j <= 3; j++) {
      if (obstacles[i] !== j) {
        ndp[j] = Math.min(ndp[j], dp[j])
      }
    }
    // 侧跳
    for (let j = 1; j <= 3; j++) {
      if (obstacles[i] === j) continue
      for (let k = 1; k <= 3; k++) {
        if (k !== j && obstacles[i] !== k) continue
        if (k !== j && obstacles[i] === k) continue
        // 从跑道 k 侧跳到 j
      }
      // 简化：从其他跑道侧跳过来
      for (let k = 1; k <= 3; k++) {
        if (k !== j && obstacles[i] !== k) {
          ndp[j] = Math.min(ndp[j], ndp[k] + 1)
        }
      }
    }
    dp = ndp
  }
  return Math.min(dp[1], dp[2], dp[3])
}
