/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  const parse = (s) => {
    let coef = 0,
      val = 0,
      num = 0,
      sign = 1,
      hasNum = false
    for (let i = 0; i <= s.length; i++) {
      const c = s[i]
      if (i === s.length || c === '+' || c === '-') {
        if (hasNum) val += sign * num
        num = 0
        hasNum = false
        if (c === '-') sign = -1
        else sign = 1
      } else if (c === 'x') {
        coef += hasNum ? sign * num : sign
        num = 0
        hasNum = false
      } else {
        num = num * 10 + +c
        hasNum = true
      }
    }
    return [coef, val]
  }
  const [left, right] = equation.split('=')
  const [lc, lv] = parse(left)
  const [rc, rv] = parse(right)
  const coef = lc - rc
  const val = rv - lv
  if (coef === 0) return val === 0 ? 'Infinite solutions' : 'No solution'
  return `x=${val / coef}`
}
