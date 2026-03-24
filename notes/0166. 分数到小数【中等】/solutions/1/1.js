/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return '0'
  let res = ''
  // 处理符号
  if (numerator < 0 !== denominator < 0) res += '-'
  let num = Math.abs(numerator)
  let den = Math.abs(denominator)
  // 整数部分
  res += Math.floor(num / den).toString()
  let remainder = num % den
  if (remainder === 0) return res
  res += '.'
  const map = new Map()
  while (remainder !== 0) {
    if (map.has(remainder)) {
      const idx = map.get(remainder)
      return res.slice(0, idx) + '(' + res.slice(idx) + ')'
    }
    map.set(remainder, res.length)
    remainder *= 10
    res += Math.floor(remainder / den).toString()
    remainder %= den
  }
  return res
}
