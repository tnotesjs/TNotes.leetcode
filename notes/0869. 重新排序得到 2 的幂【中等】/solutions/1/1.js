/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const target = String(n).split('').sort().join('')
  for (let i = 0; i < 31; i++) {
    if (
      String(1 << i)
        .split('')
        .sort()
        .join('') === target
    )
      return true
  }
  return false
}
