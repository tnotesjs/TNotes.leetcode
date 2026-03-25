/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  // dp[i] 表示余数为 i 的最大和
  let dp = [0, -Infinity, -Infinity]
  for (const num of nums) {
    const tmp = [...dp]
    for (let i = 0; i < 3; i++) {
      const r = (i + num) % 3
      tmp[r] = Math.max(tmp[r], dp[i] + num)
    }
    dp = tmp
  }
  return dp[0]
}
