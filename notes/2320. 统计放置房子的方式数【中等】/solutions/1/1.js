/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function (n) {
  const MOD = 1000000007n
  let a = 1n,
    b = 1n // a = f(0), b = f(1): 不放/放
  for (let i = 1; i <= n; i++) {
    const t = (a + b) % MOD
    a = b
    b = t
  }
  // b = f(n+1) 即单侧方案数，结果是 b^2
  return Number((b * b) % MOD)
}
