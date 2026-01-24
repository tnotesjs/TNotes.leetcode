/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  let result = ''

  while (a > 0 || b > 0) {
    const len = result.length
    // 检查最后两个字符是否相同
    const lastTwo = len >= 2 && result[len - 1] === result[len - 2]

    // 决定写入哪个字符
    let writeA = false
    if (lastTwo) {
      // 如果最后两个字符相同，必须写入另一个字符
      writeA = result[len - 1] === 'b'
    } else {
      // 选择剩余数量更多的字符
      writeA = a >= b
    }

    if (writeA) {
      // 如果 a 剩余数量远大于 b，可以连续写两个 'a'
      if (a >= 2 && a >= b + 2) {
        result += 'aa'
        a -= 2
      } else {
        result += 'a'
        a--
      }
    } else {
      // 如果 b 剩余数量远大于 a，可以连续写两个 'b'
      if (b >= 2 && b >= a + 2) {
        result += 'bb'
        b -= 2
      } else {
        result += 'b'
        b--
      }
    }
  }

  return result
}
