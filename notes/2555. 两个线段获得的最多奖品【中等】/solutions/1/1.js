/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @return {number}
 */
var maximizeWin = function (prizePositions, k) {
  const n = prizePositions.length
  const dp = new Array(n + 1).fill(0) // dp[i] = 前 i 个位置中一个线段最多能获得的奖品
  let ans = 0, left = 0
  for (let right = 0; right < n; right++) {
    while (prizePositions[right] - prizePositions[left] > k) left++
    const cnt = right - left + 1
    dp[right + 1] = Math.max(dp[right], cnt)
    ans = Math.max(ans, cnt + dp[left])
  }
  return ans
}
