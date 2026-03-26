/**
 * @param {number} n
 * @param {number[]} sick
 * @return {number}
 */
var numberOfSequence = function (n, sick) {
  const MOD = 1000000007n
  const m = sick.length
  const total = n - m
  if (total === 0) return 1

  const fact = new Array(total + 1)
  const inv_fact = new Array(total + 1)
  fact[0] = 1n
  for (let i = 1; i <= total; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD
  inv_fact[total] = power(fact[total], MOD - 2n, MOD)
  for (let i = total - 1; i >= 0; i--)
    inv_fact[i] = (inv_fact[i + 1] * BigInt(i + 1)) % MOD

  let result = fact[total]
  // 左端段
  if (sick[0] > 0) result = (result * inv_fact[sick[0]]) % MOD
  // 中间段：每段有 2^(gap-1) 种感染顺序
  for (let i = 1; i < m; i++) {
    const gap = sick[i] - sick[i - 1] - 1
    if (gap > 0) {
      result = (result * inv_fact[gap]) % MOD
      result = (result * power(2n, BigInt(gap - 1), MOD)) % MOD
    }
  }
  // 右端段
  if (sick[m - 1] < n - 1)
    result = (result * inv_fact[n - 1 - sick[m - 1]]) % MOD

  return Number(result)
}

function power(base, exp, mod) {
  let result = 1n
  base %= mod
  while (exp > 0n) {
    if (exp & 1n) result = (result * base) % mod
    base = (base * base) % mod
    exp >>= 1n
  }
  return result
}
