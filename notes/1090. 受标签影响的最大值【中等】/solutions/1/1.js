/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */
var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  const indices = values.map((_, i) => i).sort((a, b) => values[b] - values[a])
  const labelCount = new Map()
  let res = 0,
    count = 0
  for (const i of indices) {
    const label = labels[i]
    const used = labelCount.get(label) || 0
    if (used >= useLimit) continue
    res += values[i]
    labelCount.set(label, used + 1)
    if (++count === numWanted) break
  }
  return res
}
