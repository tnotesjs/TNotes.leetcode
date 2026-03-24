/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  const MOD = 1337
  const powMod = (base, exp) => {
    base %= MOD
    let result = 1
    while (exp > 0) {
      if (exp % 2 === 1) result = (result * base) % MOD
      base = (base * base) % MOD
      exp = Math.floor(exp / 2)
    }
    return result
  }
  let result = 1
  for (const digit of b) {
    result = (powMod(result, 10) * powMod(a, digit)) % MOD
  }
  return result
}
