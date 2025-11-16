/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 如果 x 是负数，那么它不可能是回文串
  if (x < 0) return false
  return x.toString() === x.toString().split('').reverse().join('')
}
