/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function (milestones) {
  const total = milestones.reduce((a, b) => a + b, 0)
  const maxVal = Math.max(...milestones)
  const rest = total - maxVal
  return rest >= maxVal ? total : 2 * rest + 1
}
