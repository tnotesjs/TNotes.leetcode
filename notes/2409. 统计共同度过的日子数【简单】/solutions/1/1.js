/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob,
) {
  const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // 将日期转换为一年中的第几天
  const getDayOfYear = (date) => {
    const [month, day] = date.split('-').map(Number)
    let days = day
    for (let i = 0; i < month - 1; i++) {
      days += daysOfMonth[i]
    }
    return days
  }

  const aliceStart = getDayOfYear(arriveAlice)
  const aliceEnd = getDayOfYear(leaveAlice)
  const bobStart = getDayOfYear(arriveBob)
  const bobEnd = getDayOfYear(leaveBob)

  // 计算重叠区间
  const overlapStart = Math.max(aliceStart, bobStart)
  const overlapEnd = Math.min(aliceEnd, bobEnd)

  // 如果没有重叠，返回 0
  return Math.max(0, overlapEnd - overlapStart + 1)
}
