/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
  const n = nums.length
  let maxPrime = 0

  // 判断是否为质数
  const isPrime = (num) => {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false
    }
    return true
  }

  // 遍历两条对角线
  for (let i = 0; i < n; i++) {
    // 主对角线
    if (isPrime(nums[i][i])) {
      maxPrime = Math.max(maxPrime, nums[i][i])
    }

    // 副对角线
    if (isPrime(nums[i][n - i - 1])) {
      maxPrime = Math.max(maxPrime, nums[i][n - i - 1])
    }
  }

  return maxPrime
}
