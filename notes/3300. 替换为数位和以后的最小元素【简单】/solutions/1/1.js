/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  // 计算数位和
  const digitSum = (n) => {
    let sum = 0
    while (n > 0) {
      sum += n % 10
      n = Math.floor(n / 10)
    }
    return sum
  }

  let minVal = Infinity
  for (const num of nums) {
    minVal = Math.min(minVal, digitSum(num))
  }

  return minVal
}
