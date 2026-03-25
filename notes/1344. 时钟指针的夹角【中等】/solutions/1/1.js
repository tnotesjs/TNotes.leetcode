/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  const minuteAngle = minutes * 6
  const hourAngle = (hour % 12) * 30 + minutes * 0.5
  let diff = Math.abs(hourAngle - minuteAngle)
  return Math.min(diff, 360 - diff)
}
