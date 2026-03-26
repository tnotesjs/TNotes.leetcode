/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
  const MX = 1001
  const isPrime = new Uint8Array(MX).fill(1)
  isPrime[0] = isPrime[1] = 0
  for (let i = 2; i * i < MX; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < MX; j += i) isPrime[j] = 0
    }
  }
  let prev = 0
  for (const x of nums) {
    if (x <= prev) return false
    // 找最大的质数 p < x - prev
    for (let p = x - prev - 1; p >= 2; p--) {
      if (isPrime[p]) {
        prev = x - p
        break
      }
      if (p === 2) prev = x
    }
    if (x - prev - 1 < 2) prev = x
  }
  return true
}
