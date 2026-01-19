/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const chars = s.split('')

  for (let i = 1; i < chars.length; i += 2) {
    const shift = chars[i].charCodeAt(0) - 48 // '0' -> 0
    chars[i] = String.fromCharCode(chars[i - 1].charCodeAt(0) + shift)
  }

  return chars.join('')
}

// 提交于 2026.01.19 20:53
// 执行用时分布 0ms 击败 100.00%
// 消耗内存分布 54.09MB 击败 100.00%
