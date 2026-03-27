/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
  let res = ''
  for (let i = 0; i < s.length; i += k) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
      sum += s.charCodeAt(j) - 97
    }
    res += String.fromCharCode(97 + sum % 26)
  }
  return res
}
