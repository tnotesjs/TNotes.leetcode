/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
  if (month < 3) year -= 1
  const w =
    (year +
      Math.floor(year / 4) -
      Math.floor(year / 100) +
      Math.floor(year / 400) +
      t[month - 1] +
      day) %
    7
  return names[w]
}
