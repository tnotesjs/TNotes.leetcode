/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let remaining = 0
  for (const byte of data) {
    if (remaining > 0) {
      if (byte >> 6 !== 0b10) return false
      remaining--
    } else if (byte >> 7 === 0) {
      remaining = 0
    } else if (byte >> 5 === 0b110) {
      remaining = 1
    } else if (byte >> 4 === 0b1110) {
      remaining = 2
    } else if (byte >> 3 === 0b11110) {
      remaining = 3
    } else {
      return false
    }
  }
  return remaining === 0
}
