/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let ops = 0
  while (n > 0) {
    const lb = n & -n
    if (n & (lb << 1)) {
      n += lb
    } else {
      n -= lb
    }
    ops++
  }
  return ops
}
