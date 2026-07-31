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
  // 计算余数
  let remainder = num % den
  if (remainder === 0) return res
  res += '.'
  // 记录每个余数在结果字符串里首次出现的下标
  const map = new Map()

  // 余数不为 0，还没除尽，继续除
  while (remainder !== 0) {
    // 检查该余数是否已出现过
    if (map.has(remainder)) {
      // 获取余数首次出现时，下一位小数在 res 中的下标
      const idx = map.get(remainder)
      // // 非循环前缀 + (循环节)
      return res.slice(0, idx) + '(' + res.slice(idx) + ')'
    }
    // 记录当前余数首次出现时，下一位小数在 res 中的下标
    map.set(remainder, res.length)
     // 计算余数：余数补 0 → 写出一位商 → 更新余数
    remainder *= 10
    res += Math.floor(remainder / den).toString()
    remainder %= den
  }
  return res
}
