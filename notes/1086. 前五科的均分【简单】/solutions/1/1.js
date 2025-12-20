/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const map = new Map()
  for (const [id, score] of items) {
    if (!map.has(id)) map.set(id, [])
    map.get(id).push(score)
  }
  const res = []
  for (const [id, arr] of map.entries()) {
    arr.sort((a, b) => b - a)
    const top5 = arr.slice(0, 5)
    const avg = Math.floor(top5.reduce((a, b) => a + b, 0) / top5.length)
    res.push([id, avg])
  }
  res.sort((a, b) => a[0] - b[0])
  return res
}
