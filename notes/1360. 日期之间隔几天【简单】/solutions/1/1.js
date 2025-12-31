/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {}

// 将日期转为自 1971-01-01 起的天数，再取差的绝对值
var daysBetweenDates = function (date1, date2) {
  return Math.abs(toDays(date1) - toDays(date2))
}

function toDays(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number)

  let days = 0
  for (let year = 1971; year < y; year++) {
    days += isLeap(year) ? 366 : 365
  }

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  for (let month = 1; month < m; month++) {
    days += monthDays[month - 1]
    if (month === 2 && isLeap(y)) days += 1
  }

  days += d
  return days
}

function isLeap(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
