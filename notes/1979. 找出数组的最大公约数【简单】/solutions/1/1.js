/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let minVal = Infinity
  let maxVal = -Infinity

  for (const v of nums) {
    if (v < minVal) minVal = v
    if (v > maxVal) maxVal = v
  }

  const gcd = (a, b) => {
    while (b !== 0) {
      const t = a % b
      a = b
      b = t
    }
    return a
  }

  return gcd(maxVal, minVal)
}
