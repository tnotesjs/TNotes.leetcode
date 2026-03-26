/**
 * @param {number[]} nums
 * @return {number}
 */
var squareFreeSubsets = function (nums) {
  const MOD = 1000000007n
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  const pmask = new Array(31).fill(-1)
  for (let v = 1; v <= 30; v++) {
    let m = 0, x = v, valid = true
    for (let i = 0; i < primes.length; i++) {
      let cnt = 0
      while (x % primes[i] === 0) { x /= primes[i]; cnt++ }
      if (cnt > 1) { valid = false; break }
      if (cnt === 1) m |= (1 << i)
    }
    if (valid) pmask[v] = m
  }
  const freq = new Array(31).fill(0)
  for (const v of nums) freq[v]++
  const dp = new Array(1 << 10).fill(0n)
  dp[0] = 1n
  for (let v = 2; v <= 30; v++) {
    if (freq[v] === 0 || pmask[v] === -1) continue
    const m = pmask[v], f = BigInt(freq[v])
    for (let s = (1 << 10) - 1; s >= 0; s--) {
      if ((s & m) === 0 && dp[s] > 0n) {
        dp[s | m] = (dp[s | m] + dp[s] * f) % MOD
      }
    }
  }
  let ans = 0n
  for (let s = 0; s < (1 << 10); s++) ans = (ans + dp[s]) % MOD
  let pow2 = 1n
  for (let i = 0; i < freq[1]; i++) pow2 = pow2 * 2n % MOD
  ans = (ans * pow2 - 1n + MOD) % MOD
  return Number(ans)
}
