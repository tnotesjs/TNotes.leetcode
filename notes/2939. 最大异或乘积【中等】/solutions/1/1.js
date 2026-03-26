/**
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @return {number}
 */
var maximumXorProduct = function(a, b, n) {
  const MOD = 1000000007n
  let A = BigInt(a), B = BigInt(b)
  for (let i = BigInt(n) - 1n; i >= 0n; i--) {
    const mask = 1n << i
    if (((A >> i) & 1n) === ((B >> i) & 1n)) {
      A |= mask
      B |= mask
    } else {
      if (A < B) {
        A |= mask
        B &= ~mask
      } else {
        B |= mask
        A &= ~mask
      }
    }
  }
  return Number((A % MOD) * (B % MOD) % MOD)
}
