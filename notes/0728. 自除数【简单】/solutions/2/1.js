/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = []

  const isSelfDividing = (num) => {
    const digits = num.toString()
    for (const digit of digits) {
      const d = parseInt(digit)
      // 如果包含0或者不能被某一位整除，则不是自除数
      if (d === 0 || num % d !== 0) {
        return false
      }
    }
    return true
  }

  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i)
    }
  }

  return result
}
