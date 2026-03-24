/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let num = 0,
    den = 1
  let i = 0,
    n = expression.length
  while (i < n) {
    let sign = 1
    if (expression[i] === '+' || expression[i] === '-') {
      if (expression[i] === '-') sign = -1
      i++
    }
    let a = 0
    while (i < n && expression[i] !== '/') {
      a = a * 10 + +expression[i]
      i++
    }
    i++ // skip '/'
    let b = 0
    while (i < n && expression[i] !== '+' && expression[i] !== '-') {
      b = b * 10 + +expression[i]
      i++
    }
    a *= sign
    num = num * b + a * den
    den *= b
    const g = gcd(Math.abs(num), den)
    num /= g
    den /= g
  }
  return `${num}/${den}`
}

function gcd(a, b) {
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a
}
