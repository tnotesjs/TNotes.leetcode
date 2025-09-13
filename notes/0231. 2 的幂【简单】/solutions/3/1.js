var isPowerOfTwo = function (n) {
  if (n <= 0) return false

  // 不断除以 2，直到不能整除为止
  while (n % 2 === 0) {
    n /= 2
  }

  // 如果最后结果是 1，说明原来是 2 的幂
  return n === 1
}
