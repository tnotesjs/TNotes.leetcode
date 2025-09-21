/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0

  for (const bill of bills) {
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      if (five === 0) return false
      five--
      ten++
    } else {
      // bill === 20
      if (ten > 0 && five > 0) {
        ten--
        five--
      } else if (five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }

  return true
}
