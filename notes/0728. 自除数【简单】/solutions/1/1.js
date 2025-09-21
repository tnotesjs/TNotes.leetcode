/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const result = []

  // 检查一个数是否为自除数
  const isSelfDividing = (num) => {
    let temp = num
    while (temp > 0) {
      const digit = temp % 10
      // 如果包含0或者不能被某一位整除，则不是自除数
      if (digit === 0 || num % digit !== 0) {
        return false
      }
      temp = Math.floor(temp / 10)
    }
    return true
  }

  // 遍历范围内的每个数字
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i)
    }
  }

  return result
}
