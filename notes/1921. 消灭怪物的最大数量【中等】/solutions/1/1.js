/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  const n = dist.length
  const arrival = dist.map((d, i) => Math.ceil(d / speed[i]))
  arrival.sort((a, b) => a - b)
  for (let i = 0; i < n; i++) {
    if (arrival[i] <= i) return i
  }
  return n
}
