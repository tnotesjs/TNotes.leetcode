/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  // 将日期转为自 1971-01-01 起的天数，再取差的绝对值
  return Math.abs(toDays(date1) - toDays(date2))
}

function toDays(dateStr) {
  // 解析日期字符串，获取年、月、日
  const [y, m, d] = dateStr.split('-').map(Number)

  let days = 0
  // 计算从 1971 年到目标年份前一年的总天数
  for (let year = 1971; year < y; year++) {
    days += isLeap(year) ? 366 : 365
  }

  // 每月天数数组（非闰年）
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  // 计算当年 1 月到目标月份前一个月的天数
  for (let month = 1; month < m; month++) {
    days += monthDays[month - 1]
    // 如果是 2 月且当年是闰年，需额外加 1 天
    if (month === 2 && isLeap(y)) days += 1
  }

  // 加上当月的天数
  days += d
  return days
}

// 判断是否为闰年
function isLeap(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

// 简洁版：直接使用内置的 Date 计算时间戳差值
/* 
var daysBetweenDates = function(date1, date2) {
  // 直接计算时间戳差值的绝对值
  const diffTime = Math.abs(new Date(date2) - new Date(date1))
  
  // 转换为天数
  return Math.floor(diffTime / (24 * 60 * 60 * 1000))
};
*/
