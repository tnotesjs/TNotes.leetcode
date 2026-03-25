/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
  const n = aliceValues.length
  const idx = Array.from({ length: n }, (_, i) => i)
  idx.sort(
    (a, b) => aliceValues[b] + bobValues[b] - (aliceValues[a] + bobValues[a]),
  )
  let alice = 0,
    bob = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) alice += aliceValues[idx[i]]
    else bob += bobValues[idx[i]]
  }
  return alice > bob ? 1 : alice < bob ? -1 : 0
}
