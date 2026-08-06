/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function (nums) {
  const min = Math.min(...nums)
  let s = 0
  let m = min
  while (m > 0) {
    s += m % 10
    m = Math.floor(m / 10)
  }
  return s % 2 === 0 ? 1 : 0
}
