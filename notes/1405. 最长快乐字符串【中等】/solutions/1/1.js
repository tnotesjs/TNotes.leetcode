/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const res = []
  const counts = [
    ['a', a],
    ['b', b],
    ['c', c],
  ]
  while (true) {
    counts.sort((x, y) => y[1] - x[1])
    const len = res.length
    let placed = false
    for (const item of counts) {
      if (item[1] === 0) continue
      if (len >= 2 && res[len - 1] === item[0] && res[len - 2] === item[0])
        continue
      res.push(item[0])
      item[1]--
      placed = true
      break
    }
    if (!placed) break
  }
  return res.join('')
}
