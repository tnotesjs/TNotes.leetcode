/**
 * @param {number} p
 * @return {number}
 */
var minNonZeroProduct = function (p) {
  const MOD = 1000000007n
  const bp = BigInt(p)
  const maxVal = (1n << bp) - 1n
  const half = maxVal - 1n
  const cnt = (1n << (bp - 1n)) - 1n
  const powMod = (base, exp, mod) => {
    let result = 1n
    base %= mod
    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % mod
      exp >>= 1n
      base = (base * base) % mod
    }
    return result
  }
  return Number(((maxVal % MOD) * powMod(half % MOD, cnt, MOD)) % MOD)
}
