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
