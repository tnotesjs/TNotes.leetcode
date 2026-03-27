/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  meetings.sort((a, b) => a[0] - b[0])
  let busyDays = 0
  let end = 0
  for (const [s, e] of meetings) {
    if (s > end) {
      busyDays += e - s + 1
    } else if (e > end) {
      busyDays += e - end
    }
    end = Math.max(end, e)
  }
  return days - busyDays
}
