/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  const oddsUpTo = (x) => Math.floor((x + 1) / 2)
  return oddsUpTo(high) - oddsUpTo(low - 1)
}
