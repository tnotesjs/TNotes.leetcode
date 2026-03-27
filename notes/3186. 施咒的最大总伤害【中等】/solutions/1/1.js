/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
  const freq = new Map()
  for (const p of power) freq.set(p, (freq.get(p) || 0) + 1)
  const vals = [...freq.keys()].sort((a, b) => a - b)
  const n = vals.length
  // dp[i] = 考虑前 i 种伤害值的最大总伤害
  const dp = new Array(n + 1).fill(0)
  let j = 0
  for (let i = 0; i < n; i++) {
    // 不选 vals[i]
    dp[i + 1] = dp[i]
    // 选 vals[i]：找最大的 j 使得 vals[j] < vals[i] - 2
    while (j < i && vals[j] < vals[i] - 2) j++
    // j 指向第一个 >= vals[i]-2 的位置
    // 需要 dp[第一个 >= vals[i]-2 之前的位置]
    let prevIdx = j // vals[0..j-1] 都 < vals[i]-2
    dp[i + 1] = Math.max(dp[i + 1], dp[prevIdx] + vals[i] * freq.get(vals[i]))
  }
  return dp[n]
}
