/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
  // dp[i] = 用 i 次操作最多能确定的楼层数
  // dp[i] = dp[i-1] + dp[i-1] + 1 对于两枚鸡蛋：dp[i] = i*(i+1)/2
  let k = 1
  while ((k * (k + 1)) / 2 < n) k++
  return k
}
