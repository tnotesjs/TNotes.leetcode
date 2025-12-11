/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let result = 0

  // 将 s 和 t 的所有字符进行异或
  for (let char of s) {
    result ^= char.charCodeAt(0)
  }

  for (let char of t) {
    result ^= char.charCodeAt(0)
  }

  return String.fromCharCode(result)
}
