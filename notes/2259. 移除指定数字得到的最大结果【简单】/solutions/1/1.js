/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let pos = -1
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] !== digit) continue
    pos = i
    if (i + 1 < number.length && number[i + 1] > number[i]) {
      break // deleting here yields larger prefix
    }
  }

  return number.slice(0, pos) + number.slice(pos + 1)
}
