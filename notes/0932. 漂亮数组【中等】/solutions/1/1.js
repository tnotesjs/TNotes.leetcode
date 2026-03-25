/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function (n) {
  if (n === 1) return [1]

  const odd = beautifulArray(Math.ceil(n / 2))
  const even = beautifulArray(Math.floor(n / 2))

  return [...odd.map((x) => 2 * x - 1), ...even.map((x) => 2 * x)]
}
