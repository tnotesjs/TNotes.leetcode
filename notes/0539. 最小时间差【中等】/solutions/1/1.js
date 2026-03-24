/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const mins = timePoints.map((t) => {
    const [h, m] = t.split(':')
    return parseInt(h) * 60 + parseInt(m)
  })
  mins.sort((a, b) => a - b)
  let res = 1440 - mins[mins.length - 1] + mins[0]
  for (let i = 1; i < mins.length; i++) {
    res = Math.min(res, mins[i] - mins[i - 1])
  }
  return res
}
