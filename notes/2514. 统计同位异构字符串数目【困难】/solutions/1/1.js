/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function (s) {
  const MOD = 1000000007n
  const words = s.split(' ')
  let maxLen = 0
  for (const w of words) maxLen = Math.max(maxLen, w.length)
  const fact = new Array(maxLen + 1)
  fact[0] = 1n
  for (let i = 1; i <= maxLen; i++) fact[i] = (fact[i - 1] * BigInt(i)) % MOD

  const modpow = (base, exp, mod) => {
    let result = 1n
    base %= mod
    while (exp > 0n) {
      if (exp % 2n === 1n) result = (result * base) % mod
      exp >>= 1n
      base = (base * base) % mod
    }
    return result
  }
  const modinv = (a, mod) => modpow(a, mod - 2n, mod)

  let ans = 1n
  for (const w of words) {
    const cnt = new Array(26).fill(0)
    for (const c of w) cnt[c.charCodeAt(0) - 97]++
    ans = (ans * fact[w.length]) % MOD
    for (const c of cnt) {
      if (c > 1) ans = (ans * modinv(fact[c], MOD)) % MOD
    }
  }
  return Number(ans)
}
