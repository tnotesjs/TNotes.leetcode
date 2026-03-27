/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
  const isPrime = (n) => {
    if (n < 2) return false
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false
    }
    return true
  }
  let first = -1, last = -1
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      if (first === -1) first = i
      last = i
    }
  }
  return last - first
}
