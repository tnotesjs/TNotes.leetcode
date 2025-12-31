/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let cur1 = 0
  let cur0 = 0
  let best1 = 0
  let best0 = 0

  for (const ch of s) {
    if (ch === '1') {
      cur1 += 1
      cur0 = 0
    } else {
      cur0 += 1
      cur1 = 0
    }
    if (cur1 > best1) best1 = cur1
    if (cur0 > best0) best0 = cur0
  }

  return best1 > best0
}
