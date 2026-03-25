/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const diff = new Array(1001).fill(0)
  for (const [num, from, to] of trips) {
    diff[from] += num
    diff[to] -= num
  }
  let cur = 0
  for (let i = 0; i <= 1000; i++) {
    cur += diff[i]
    if (cur > capacity) return false
  }
  return true
}
