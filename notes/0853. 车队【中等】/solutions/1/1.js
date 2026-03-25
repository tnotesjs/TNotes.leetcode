/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = position.map((p, i) => [p, (target - p) / speed[i]])
  cars.sort((a, b) => b[0] - a[0])
  let fleets = 0,
    maxTime = 0
  for (const [_, time] of cars) {
    if (time > maxTime) {
      fleets++
      maxTime = time
    }
  }
  return fleets
}
