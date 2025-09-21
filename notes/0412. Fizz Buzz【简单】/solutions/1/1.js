/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = []

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      // 同时是 3 和 5 的倍数（即 15 的倍数）
      result.push('FizzBuzz')
    } else if (i % 3 === 0) {
      // 是 3 的倍数
      result.push('Fizz')
    } else if (i % 5 === 0) {
      // 是 5 的倍数
      result.push('Buzz')
    } else {
      // 其他情况，转换为字符串
      result.push(i.toString())
    }
  }

  return result
}
