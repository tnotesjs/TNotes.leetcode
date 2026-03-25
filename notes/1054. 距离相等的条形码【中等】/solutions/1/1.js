/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const count = new Map()
  for (const b of barcodes) count.set(b, (count.get(b) || 0) + 1)
  const sorted = [...count.entries()].sort((a, b) => b[1] - a[1])
  const res = new Array(barcodes.length)
  let idx = 0
  for (const [val, cnt] of sorted) {
    for (let i = 0; i < cnt; i++) {
      res[idx] = val
      idx += 2
      if (idx >= barcodes.length) idx = 1
    }
  }
  return res
}
