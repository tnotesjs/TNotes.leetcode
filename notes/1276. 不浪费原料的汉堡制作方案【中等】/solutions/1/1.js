/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  // 4x + 2y = tomatoSlices, x + y = cheeseSlices
  // x = (tomatoSlices - 2 * cheeseSlices) / 2
  // y = cheeseSlices - x
  if (tomatoSlices % 2 !== 0) return []
  const jumbo = (tomatoSlices - 2 * cheeseSlices) / 2
  const small = cheeseSlices - jumbo
  if (jumbo < 0 || small < 0) return []
  return [jumbo, small]
}
