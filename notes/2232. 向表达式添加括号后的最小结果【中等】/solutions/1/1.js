/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function (expression) {
  const plusIdx = expression.indexOf('+')
  const left = expression.substring(0, plusIdx)
  const right = expression.substring(plusIdx + 1)
  let minVal = Infinity,
    bestL = 0,
    bestR = right.length
  for (let i = 0; i < left.length; i++) {
    for (let j = 1; j <= right.length; j++) {
      const mulL = i === 0 ? 1 : parseInt(left.substring(0, i))
      const addL = parseInt(left.substring(i))
      const addR = parseInt(right.substring(0, j))
      const mulR = j === right.length ? 1 : parseInt(right.substring(j))
      const val = mulL * (addL + addR) * mulR
      if (val < minVal) {
        minVal = val
        bestL = i
        bestR = j
      }
    }
  }
  return (
    left.substring(0, bestL) +
    '(' +
    left.substring(bestL) +
    '+' +
    right.substring(0, bestR) +
    ')' +
    right.substring(bestR)
  )
}
