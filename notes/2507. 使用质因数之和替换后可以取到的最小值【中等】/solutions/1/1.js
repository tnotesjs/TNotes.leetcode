/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  while (true) {
    let sum = 0,
      x = n
    for (let i = 2; i * i <= x; i++) {
      while (x % i === 0) {
        sum += i
        x = Math.floor(x / i)
      }
    }
    if (x > 1) sum += x
    if (sum === n) return n
    n = sum
  }
}
