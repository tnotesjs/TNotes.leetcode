/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalTank = 0,
    curTank = 0,
    start = 0
  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i]
    totalTank += diff
    curTank += diff
    if (curTank < 0) {
      start = i + 1
      curTank = 0
    }
  }
  return totalTank >= 0 ? start : -1
}
