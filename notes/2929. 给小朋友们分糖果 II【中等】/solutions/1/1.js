/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
  const f = (x) => x >= 0 ? (x + 2) * (x + 1) / 2 : 0
  return f(n) - 3 * f(n - limit - 1) + 3 * f(n - 2 * (limit + 1)) - f(n - 3 * (limit + 1))
}
