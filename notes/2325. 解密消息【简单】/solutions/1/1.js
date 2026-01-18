/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map()
  let index = 0

  // 构建映射表：key 中首次出现的字母 -> a-z
  for (const char of key) {
    if (char !== ' ' && !map.has(char)) {
      map.set(char, String.fromCharCode(97 + index))
      index++
    }
  }

  // 解密消息
  let result = ''
  for (const char of message) {
    if (char === ' ') {
      result += ' '
    } else {
      result += map.get(char)
    }
  }

  return result
}
