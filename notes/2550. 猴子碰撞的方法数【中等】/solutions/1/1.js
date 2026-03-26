/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  const MOD = 1000000007n
  const power = (base, exp, mod) => {
    let result = 1n
    base = base % mod
    while (exp > 0n) {
      if (exp % 2n === 1n) result = (result * base) % mod
      exp = exp / 2n
      base = (base * base) % mod
    }
    return result
  }
  return Number((power(2n, BigInt(n), MOD) - 2n + MOD) % MOD)
}
