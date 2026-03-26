/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function (numArrows, aliceArrows) {
  let bestScore = 0,
    bestMask = 0
  for (let mask = 0; mask < 1 << 12; mask++) {
    let cost = 0,
      score = 0
    for (let i = 0; i < 12; i++) {
      if (mask & (1 << i)) {
        cost += aliceArrows[i] + 1
        score += i
      }
    }
    if (cost <= numArrows && score > bestScore) {
      bestScore = score
      bestMask = mask
    }
  }
  const result = new Array(12).fill(0)
  let remaining = numArrows
  for (let i = 0; i < 12; i++) {
    if (bestMask & (1 << i)) {
      result[i] = aliceArrows[i] + 1
      remaining -= result[i]
    }
  }
  result[0] += remaining
  return result
}
