/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  return String(n).replace(/\B(?=(\d{3})+$)/g, '.')
}
