/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
  const cnt = new Map()
  for (const x of basket1) cnt.set(x, (cnt.get(x) || 0) + 1)
  for (const x of basket2) cnt.set(x, (cnt.get(x) || 0) - 1)
  const swaps = []
  for (const [k, v] of cnt) {
    if (v % 2 !== 0) return -1
    const need = Math.abs(v) / 2
    for (let i = 0; i < need; i++) swaps.push(k)
  }
  swaps.sort((a, b) => a - b)
  let minVal = Infinity
  for (const x of basket1) minVal = Math.min(minVal, x)
  for (const x of basket2) minVal = Math.min(minVal, x)
  let cost = 0
  for (let i = 0; i < swaps.length / 2; i++) {
    cost += Math.min(swaps[i], 2 * minVal)
  }
  return cost
}
