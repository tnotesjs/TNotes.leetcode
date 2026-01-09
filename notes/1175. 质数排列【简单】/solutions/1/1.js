/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  // JS Number：安全整数范围是 ±(2^53 - 1) ≈ 9e15
  // 本题中阶乘相乘的中间结果可达 ~1e18，会超出该范围
  // BigInt 整数精度不受限制，因此必须使用 BigInt
  const MOD = 1000000007n

  const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false
    }
    return true
  }

  // 使用 BigInt 计算阶乘，避免 Number 精度溢出
  const factorial = (num) => {
    let res = 1n
    for (let i = 2n; i <= num; i++) {
      res = (res * i) % MOD
    }
    return res
  }

  let primeCount = 0
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primeCount++
  }

  const primePerm = factorial(BigInt(primeCount))
  const nonPrimePerm = factorial(BigInt(n - primeCount))

  // 若用 Number，primePerm * nonPrimePerm 会超过 2^53 - 1 导致结果错误
  const ans = (primePerm * nonPrimePerm) % MOD

  // 取模后结果 < 1e9+7，处于 Number 安全范围内
  return Number(ans)
}
