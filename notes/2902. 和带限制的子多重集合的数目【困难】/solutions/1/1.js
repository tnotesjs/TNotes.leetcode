/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var countSubMultisets = function(nums, l, r) {
  const MOD = 1000000007
  const cnt = new Map()
  let total = 0
  for (const x of nums) {
    cnt.set(x, (cnt.get(x) || 0) + 1)
    total += x
  }
  if (total < l) return 0
  r = Math.min(r, total)

  const zeros = cnt.get(0) || 0
  cnt.delete(0)

  const dp = new Array(r + 1).fill(0)
  dp[0] = 1

  for (const [v, c] of cnt) {
    const newDp = new Array(r + 1).fill(0)
    for (let rem = 0; rem < v; rem++) {
      let windowSum = 0
      let count = 0
      for (let j = rem; j <= r; j += v) {
        windowSum = (windowSum + dp[j]) % MOD
        count++
        if (count > c + 1) {
          windowSum = (windowSum - dp[j - (c + 1) * v] + MOD) % MOD
        }
        newDp[j] = windowSum
      }
    }
    for (let i = 0; i <= r; i++) dp[i] = newDp[i]
  }

  let ans = 0
  for (let i = l; i <= r; i++) {
    ans = (ans + dp[i]) % MOD
  }
  ans = ans % MOD * ((zeros + 1) % MOD) % MOD
  return ans
}
