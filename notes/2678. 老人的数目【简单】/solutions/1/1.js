/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0
  for (const detail of details) {
    const age = Number(detail.slice(11, 13))
    if (age > 60) count++
  }
  return count
}
