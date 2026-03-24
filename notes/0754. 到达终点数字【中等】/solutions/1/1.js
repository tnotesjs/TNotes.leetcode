/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target)
  let sum = 0,
    step = 0
  while (sum < target || (sum - target) % 2 !== 0) {
    step++
    sum += step
  }
  return step
}
