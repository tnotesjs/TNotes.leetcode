/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = Infinity
  let max = -Infinity
  let sum = 0
  for (const s of salary) {
    if (s < min) min = s
    if (s > max) max = s
    sum += s
  }
  // 去掉最小和最大后取平均
  return (sum - min - max) / (salary.length - 2)
}
