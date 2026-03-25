/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const n = seats.length
  let res = 0,
    last = -1
  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      if (last === -1) res = i
      else res = Math.max(res, Math.floor((i - last) / 2))
      last = i
    }
  }
  res = Math.max(res, n - 1 - last)
  return res
}
