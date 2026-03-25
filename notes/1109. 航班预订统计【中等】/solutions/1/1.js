/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const diff = new Array(n + 2).fill(0)
  for (const [first, last, seats] of bookings) {
    diff[first] += seats
    diff[last + 1] -= seats
  }
  const res = new Array(n)
  res[0] = diff[1]
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] + diff[i + 1]
  }
  return res
}
