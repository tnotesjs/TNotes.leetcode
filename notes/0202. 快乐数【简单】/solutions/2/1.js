/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const getSumOfSquares = (num) => {
    let sum = 0
    while (num > 0) {
      const digit = num % 10
      sum += digit * digit
      num = Math.floor(num / 10)
    }
    return sum
  }

  let slow = n
  let fast = getSumOfSquares(n)
  // 快指针一次走两步，慢指针一次走一步；相遇则有环
  while (fast !== 1 && slow !== fast) {
    slow = getSumOfSquares(slow)
    fast = getSumOfSquares(getSumOfSquares(fast))
  }
  return fast === 1
}
