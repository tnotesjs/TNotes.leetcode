/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1
  // 所有 1..n 的异或
  let totalXor = 0
  for (let i = 1; i <= n; i++) totalXor ^= i
  // 奇数位 encoded 的异或 = perm[1]^perm[2]^...^perm[n-1] 去掉 perm[0]
  let oddXor = 0
  for (let i = 1; i < n - 1; i += 2) oddXor ^= encoded[i]
  const perm = new Array(n)
  perm[0] = totalXor ^ oddXor
  for (let i = 0; i < n - 1; i++) perm[i + 1] = perm[i] ^ encoded[i]
  return perm
}
