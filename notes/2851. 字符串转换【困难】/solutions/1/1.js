/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (s, t, k) {
  const MOD = 1000000007n
  const n = BigInt(s.length),
    nn = Number(n)

  // 给 t 建 LPS 数组
  const fail = new Int32Array(nn)
  for (let i = 1; i < nn; i++) {
    let j = fail[i - 1]
    while (j > 0 && t[j] !== t[i]) j = fail[j - 1]
    if (t[j] === t[i]) j++
    fail[i] = j
  }

  // 在 s+s 中搜索 t，统计匹配次数
  let p = 0n,
    j = 0
  const text = s + s // 所有旋转都是 s+s 的长度为 n 的子串
  for (let i = 0; i < 2 * nn - 1; i++) {
    while (j > 0 && text[i] !== t[j]) j = fail[j - 1]
    if (text[i] === t[j]) j++
    if (j === nn) {
      if (i - nn + 1 < nn) p++ // 起始位置 < n 才算有效旋转
      j = fail[j - 1]
    }
  }

  const c = s === t ? 1n : 0n
  const K = BigInt(k)
  const inv_n = modPow(n, MOD - 2n, MOD)
  const nk = modPow(n - 1n, K, MOD)
  const sign = K % 2n === 0n ? 1n : MOD - 1n // 1 or -1 mod MOD
  let result =
    (((sign * ((((c * n) % MOD) - (p % MOD) + MOD) % MOD)) % MOD) +
      (((p % MOD) * nk) % MOD)) %
    MOD
  result = (result * inv_n) % MOD
  return Number(result)
}

function modPow(base, exp, mod) {
  let r = 1n
  base = ((base % mod) + mod) % mod
  while (exp > 0n) {
    if (exp & 1n) r = (r * base) % mod
    exp >>= 1n
    base = (base * base) % mod
  }
  return r
}
