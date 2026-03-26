/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
  buses.sort((a, b) => a - b)
  passengers.sort((a, b) => a - b)
  const passSet = new Set(passengers)
  let j = 0,
    space = 0
  for (let i = 0; i < buses.length; i++) {
    space = capacity
    while (space > 0 && j < passengers.length && passengers[j] <= buses[i]) {
      j++
      space--
    }
  }
  // j-1 是最后一个上车的乘客，如果还有空位，则可以在最后一趟末班车发车时到
  let res
  if (space > 0) {
    res = buses[buses.length - 1]
  } else {
    res = passengers[j - 1]
  }
  // 往前找一个不在乘客中的时间
  while (passSet.has(res)) res--
  return res
}
