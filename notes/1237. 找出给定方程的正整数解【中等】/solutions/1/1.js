/**
 * @param {CustomFunction} customfunction
 * @param {number} z
 * @return {number[][]}
 */
var findSolution = function (customfunction, z) {
  const res = []
  let x = 1,
    y = 1000
  while (x <= 1000 && y >= 1) {
    const val = customfunction.f(x, y)
    if (val === z) {
      res.push([x, y])
      x++
      y--
    } else if (val < z) {
      x++
    } else {
      y--
    }
  }
  return res
}
