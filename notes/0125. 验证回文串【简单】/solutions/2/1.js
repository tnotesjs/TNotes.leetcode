/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1,
    reg = /[a-zA-Z0-9]/
  while (i < j) {
    if (!reg.test(s[i])) ++i
    else if (!reg.test(s[j])) --j
    else if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
    else i++, j--
  }
  return true
}
