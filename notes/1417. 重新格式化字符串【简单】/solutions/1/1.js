/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const digits = []
  const letters = []
  for (const ch of s) {
    if (ch >= '0' && ch <= '9') digits.push(ch)
    else letters.push(ch)
  }
  // 长度差大于 1 无法交替
  if (Math.abs(digits.length - letters.length) > 1) return ''

  // 让较长的在前，方便交替取出
  let a = digits
  let b = letters
  if (letters.length > digits.length) {
    a = letters
    b = digits
  }

  let res = ''
  const m = a.length
  for (let i = 0; i < m; i++) {
    res += a[i]
    if (i < b.length) res += b[i]
  }
  return res
}
