/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  const res = []
  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i]
    if (ch === '+' || ch === '-' || ch === '*') {
      const left = diffWaysToCompute(expression.slice(0, i))
      const right = diffWaysToCompute(expression.slice(i + 1))
      for (const l of left) {
        for (const r of right) {
          if (ch === '+') res.push(l + r)
          else if (ch === '-') res.push(l - r)
          else res.push(l * r)
        }
      }
    }
  }
  if (res.length === 0) res.push(Number(expression))
  return res
}
