/**
 * @param {string} date - YYYY-MM-DD
 * @return {number}
 */
var dayOfYear = function (date) {
  const [y, m, d] = date.split('-').map(Number)
  const isLeap = y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)
  const days = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let ans = d
  for (let i = 0; i < m - 1; i++) ans += days[i]
  return ans
}
