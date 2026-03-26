/**
 * @param {number} n
 * @return {number}
 */
var stringCount = function(n) {
  const MOD = 1000000007n
  const N = BigInt(n)
  function power(base, exp) {
    base = ((base % MOD) + MOD) % MOD
    let result = 1n
    while (exp > 0n) {
      if (exp & 1n) result = result * base % MOD
      base = base * base % MOD
      exp >>= 1n
    }
    return result
  }
  let ans = power(26n, N)
  ans = (ans - 3n * power(25n, N) % MOD + MOD) % MOD
  ans = (ans - N % MOD * power(25n, N - 1n) % MOD + MOD) % MOD
  ans = (ans + 3n * power(24n, N) % MOD) % MOD
  ans = (ans + 2n * (N % MOD) % MOD * power(24n, N - 1n) % MOD) % MOD
  ans = (ans - power(23n, N) + MOD) % MOD
  ans = (ans - N % MOD * power(23n, N - 1n) % MOD + MOD) % MOD
  return Number(ans)
}
