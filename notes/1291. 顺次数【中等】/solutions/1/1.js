/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const res = []
  for (let start = 1; start <= 9; start++) {
    let num = start
    for (let next = start + 1; next <= 9; next++) {
      num = num * 10 + next
      if (num >= low && num <= high) res.push(num)
      if (num > high) break
    }
  }
  res.sort((a, b) => a - b)
  return res
}
