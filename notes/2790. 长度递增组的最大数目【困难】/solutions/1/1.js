/**
 * @param {number[]} usageLimits
 * @return {number}
 */
var maxIncreasingGroups = function (usageLimits) {
  usageLimits.sort((a, b) => a - b)
  let k = 0,
    surplus = 0
  for (const limit of usageLimits) {
    surplus += limit
    if (surplus >= k + 1) {
      k++
      surplus -= k
    }
  }
  return k
}
