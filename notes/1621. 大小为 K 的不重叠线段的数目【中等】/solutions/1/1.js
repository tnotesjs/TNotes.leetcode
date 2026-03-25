/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  const MOD = 1e9 + 7
  // dp[i][j] = 前 i 个点放 j 条线段的方案数
  // 等价于从 n+k-1 个点中选 2k 个端点，即 C(n+k-1, 2k)
  // 使用组合数计算
  const total = n + k - 1
  const choose = 2 * k
  // C(total, choose) mod MOD
  if (choose > total) return 0
  let num = 1n,
    den = 1n
  const mod = BigInt(MOD)
  for (let i = 0; i < choose; i++) {
    num = (num * BigInt(total - i)) % mod
    den = (den * BigInt(i + 1)) % mod
  }
  // 模逆元
  const power = (base, exp, m) => {
    let result = 1n
    base %= m
    while (exp > 0n) {
      if (exp % 2n === 1n) result = (result * base) % m
      exp /= 2n
      base = (base * base) % m
    }
    return result
  }
  return Number((num * power(den, mod - 2n, mod)) % mod)
}
