/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // 按每箱单元数降序，优先拿价值最高的箱子
  boxTypes.sort((a, b) => b[1] - a[1])

  let remaining = truckSize
  let total = 0

  for (const [count, perBox] of boxTypes) {
    if (remaining === 0) break
    const take = Math.min(count, remaining)
    total += take * perBox
    remaining -= take
  }

  return total
}
