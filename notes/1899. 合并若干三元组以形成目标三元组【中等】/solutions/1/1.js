/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  const [a, b, c] = target
  let f0 = false,
    f1 = false,
    f2 = false
  for (const [x, y, z] of triplets) {
    if (x <= a && y <= b && z <= c) {
      if (x === a) f0 = true
      if (y === b) f1 = true
      if (z === c) f2 = true
    }
  }
  return f0 && f1 && f2
}
