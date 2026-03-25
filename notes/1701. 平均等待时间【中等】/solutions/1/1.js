/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let cur = 0,
    total = 0
  for (const [arrival, time] of customers) {
    cur = Math.max(cur, arrival) + time
    total += cur - arrival
  }
  return total / customers.length
}
