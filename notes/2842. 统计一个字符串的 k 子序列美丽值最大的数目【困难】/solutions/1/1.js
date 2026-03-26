/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKSubsequencesWithMaxBeauty = function(s, k) {
  const MOD = 1000000007n
  const freq = new Array(26).fill(0)
  for (const c of s) freq[c.charCodeAt(0) - 97]++
  const freqs = freq.filter(f => f > 0).sort((a, b) => b - a)
  if (k > freqs.length) return 0

  const boundary = freqs[k - 1]
  let result = 1n, rem = k
  let countBound = 0
  for (const f of freqs) if (f === boundary) countBound++
  for (const f of freqs) {
    if (f > boundary) { result = result * BigInt(f) % MOD; rem-- }
  }
  // C(countBound, rem) * boundary^rem
  result = result * comb(countBound, rem, MOD) % MOD
  result = result * modPow(BigInt(boundary), BigInt(rem), MOD) % MOD
  return Number(result)
}

function modPow(base, exp, mod) {
  let r = 1n; base %= mod
  while (exp > 0n) { if (exp & 1n) r = r * base % mod; exp >>= 1n; base = base * base % mod }
  return r
}

function comb(n, r, mod) {
  if (r > n || r < 0) return 0n
  let num = 1n, den = 1n
  for (let i = 0; i < r; i++) { num = num * BigInt(n - i) % mod; den = den * BigInt(i + 1) % mod }
  return num * modPow(den, mod - 2n, mod) % mod
}
