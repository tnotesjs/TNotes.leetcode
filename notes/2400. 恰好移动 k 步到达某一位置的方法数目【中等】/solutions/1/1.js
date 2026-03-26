/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (startPos, endPos, k) {
  const MOD = 1000000007n
  const diff = Math.abs(endPos - startPos)
  if ((k - diff) % 2 !== 0 || k < diff) return 0
  const right = (k + diff) / 2
  const fact = [1n]
  for (let i = 1; i <= k; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD
  const modpow = (base, exp, mod) => {
    let result = 1n
    base %= mod
    while (exp > 0n) {
      if (exp % 2n === 1n) result = (result * base) % mod
      exp /= 2n
      base = (base * base) % mod
    }
    return result
  }
  const inv = (a) => modpow(a, MOD - 2n, MOD)
  return Number(
    (((fact[k] * inv(fact[right])) % MOD) * inv(fact[k - right])) % MOD,
  )
}
