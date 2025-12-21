/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  return date
    .split('-')
    .map((part) => Number(part).toString(2))
    .join('-')
}
