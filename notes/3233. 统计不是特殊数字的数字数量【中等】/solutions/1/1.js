/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function(l, r) {
  // 特殊数字 = p^2（p 是质数），因为恰好有 2 个真因数（1 和 p）
  const sqrtR = Math.floor(Math.sqrt(r))
  // 埃氏筛找 [2, sqrtR] 的质数
  const isPrime = new Array(sqrtR + 1).fill(true)
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i * i <= sqrtR; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= sqrtR; j += i) isPrime[j] = false
    }
  }
  let specialCount = 0
  for (let p = 2; p <= sqrtR; p++) {
    if (isPrime[p] && p * p >= l && p * p <= r) specialCount++
  }
  return r - l + 1 - specialCount
}
