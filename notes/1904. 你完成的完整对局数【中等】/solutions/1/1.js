/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */
var numberOfRounds = function (loginTime, logoutTime) {
  const toMin = (t) => parseInt(t.slice(0, 2)) * 60 + parseInt(t.slice(3))
  let start = toMin(loginTime),
    end = toMin(logoutTime)
  if (end < start) end += 1440
  start = Math.ceil(start / 15) * 15
  return Math.max(0, Math.floor(end / 15) - start / 15)
}
