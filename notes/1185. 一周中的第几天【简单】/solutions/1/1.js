/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  // 定义星期几的名称数组
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  // 创建日期对象，注意月份是从0开始的，所以month需要减1
  const date = new Date(year, month - 1, day)

  // 获取星期几（0表示周日，1表示周一...6表示周六）
  const dayIndex = date.getDay()

  // 返回对应的星期名称
  return daysOfWeek[dayIndex]
}
