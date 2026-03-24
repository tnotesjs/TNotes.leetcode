/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  const n = start.length
  let i = 0,
    j = 0
  while (i < n || j < n) {
    while (i < n && start[i] === 'X') i++
    while (j < n && end[j] === 'X') j++
    if (i === n || j === n) return i === n && j === n
    if (start[i] !== end[j]) return false
    if (start[i] === 'L' && i < j) return false
    if (start[i] === 'R' && i > j) return false
    i++
    j++
  }
  return true
}
