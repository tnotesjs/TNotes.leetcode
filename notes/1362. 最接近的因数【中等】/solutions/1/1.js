/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
  const find = (n) => {
    for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
      if (n % i === 0) return [i, n / i]
    }
    return [1, n]
  }
  const a = find(num + 1),
    b = find(num + 2)
  return Math.abs(a[0] - a[1]) <= Math.abs(b[0] - b[1]) ? a : b
}
