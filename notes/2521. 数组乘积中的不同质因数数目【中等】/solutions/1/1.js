/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  const primes = new Set()
  for (const num of nums) {
    let x = num
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        primes.add(i)
        while (x % i === 0) x = Math.floor(x / i)
      }
    }
    if (x > 1) primes.add(x)
  }
  return primes.size
}
