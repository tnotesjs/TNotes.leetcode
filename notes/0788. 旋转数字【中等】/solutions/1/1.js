/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  let res = 0
  for (let i = 1; i <= n; i++) {
    if (isGood(i)) res++
  }
  return res
}

function isGood(num) {
  let diff = false
  while (num > 0) {
    const d = num % 10
    if (d === 3 || d === 4 || d === 7) return false
    if (d === 2 || d === 5 || d === 6 || d === 9) diff = true
    num = Math.floor(num / 10)
  }
  return diff
}
