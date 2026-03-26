/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let total = 0
  const last = { M: 0, P: 0, G: 0 }
  for (let i = 0; i < garbage.length; i++) {
    total += garbage[i].length
    for (const c of garbage[i]) last[c] = i
  }
  const prefix = new Array(garbage.length).fill(0)
  for (let i = 1; i < garbage.length; i++) {
    prefix[i] = prefix[i - 1] + travel[i - 1]
  }
  total += prefix[last['M']] + prefix[last['P']] + prefix[last['G']]
  return total
}
