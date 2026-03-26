/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const n = s.length
  if (n % 2 !== 0) return false
  // 从左到右：把 locked='0' 和 '(' 都视为可提供 '('
  let min = 0,
    max = 0
  for (let i = 0; i < n; i++) {
    if (locked[i] === '0') {
      min--
      max++
    } else if (s[i] === '(') {
      min++
      max++
    } else {
      min--
      max--
    }
    if (max < 0) return false
    if (min < 0) min = 0
  }
  return min === 0
}
