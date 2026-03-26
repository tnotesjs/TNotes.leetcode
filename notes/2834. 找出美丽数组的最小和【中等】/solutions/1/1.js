/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
  const MOD = 1000000007n
  const inv2 = 500000004n
  const N = BigInt(n), T = BigInt(target)
  const M = N < (T - 1n) / 2n ? N : (T - 1n) / 2n
  const rem = N - M
  const s1 = M % MOD * ((M + 1n) % MOD) % MOD * inv2 % MOD
  const s2 = rem > 0n
    ? (rem % MOD * (T % MOD) % MOD + rem % MOD * ((rem - 1n) % MOD) % MOD * inv2 % MOD) % MOD
    : 0n
  return Number((s1 + s2) % MOD)
}
