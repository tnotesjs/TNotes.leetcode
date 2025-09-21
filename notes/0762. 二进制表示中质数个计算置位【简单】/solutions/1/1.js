/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  // 判断一个数是否为质数
  const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false
    }
    return true
  }

  // 计算一个数二进制表示中1的个数
  const countOnes = (num) => {
    let count = 0
    while (num > 0) {
      count += num & 1
      num >>= 1
    }
    return count
  }

  let result = 0
  for (let i = left; i <= right; i++) {
    const onesCount = countOnes(i)
    if (isPrime(onesCount)) {
      result++
    }
  }

  return result
}
