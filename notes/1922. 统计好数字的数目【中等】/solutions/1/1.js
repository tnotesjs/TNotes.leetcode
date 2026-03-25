/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  const MOD = 1000000007n
  const bigN = BigInt(n)
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
  const even = (bigN + 1n) / 2n
  const odd = bigN / 2n
  return Number((powMod(5n, even, MOD) * powMod(4n, odd, MOD)) % MOD)
}
