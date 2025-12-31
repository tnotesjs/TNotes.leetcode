/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  const digits = num.toString().split('').map(Number)

  const odds = []
  const evens = []
  for (const d of digits) {
    if (d % 2 === 0) evens.push(d)
    else odds.push(d)
  }

  odds.sort((a, b) => b - a)
  evens.sort((a, b) => b - a)

  let oi = 0
  let ei = 0
  const res = []
  for (const d of digits) {
    if (d % 2 === 0) res.push(evens[ei++])
    else res.push(odds[oi++])
  }

  return Number(res.join(''))
}
