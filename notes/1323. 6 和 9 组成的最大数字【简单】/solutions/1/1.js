/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {}

// 找到最高位的 6 将其改为 9
var maximum69Number = function (num) {
  const chars = String(num).split('')
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '6') {
      chars[i] = '9'
      break
    }
  }
  return Number(chars.join(''))
}
