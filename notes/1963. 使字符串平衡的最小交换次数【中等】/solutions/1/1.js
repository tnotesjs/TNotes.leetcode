/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let open = 0,
    maxClose = 0
  for (const ch of s) {
    if (ch === '[') open++
    else open--
    if (open < 0) maxClose = Math.max(maxClose, -open)
  }
  return Math.ceil(maxClose / 2)
}
