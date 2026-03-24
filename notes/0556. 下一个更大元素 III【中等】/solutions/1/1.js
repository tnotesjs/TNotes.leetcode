/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const digits = ('' + n).split('')
  const len = digits.length
  let i = len - 2
  while (i >= 0 && digits[i] >= digits[i + 1]) i--
  if (i < 0) return -1
  let j = len - 1
  while (digits[j] <= digits[i]) j--
  ;[digits[i], digits[j]] = [digits[j], digits[i]]
  let l = i + 1,
    r = len - 1
  while (l < r) {
    ;[digits[l], digits[r]] = [digits[r], digits[l]]
    l++
    r--
  }
  const res = parseInt(digits.join(''))
  return res > 2147483647 ? -1 : res
}
