/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
  if (finalSum % 2 !== 0) return []
  const res = []
  let cur = 2
  let remaining = finalSum
  while (remaining > cur * 2) {
    res.push(cur)
    remaining -= cur
    cur += 2
  }
  res.push(remaining)
  return res
}
