/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const parse = (s) =>
    s.split('+').map((v, i) => (i === 1 ? parseInt(v) : parseInt(v)))
  const [a, b] = parse(num1)
  const [c, d] = parse(num2)
  return `${a * c - b * d}+${a * d + b * c}i`
}
