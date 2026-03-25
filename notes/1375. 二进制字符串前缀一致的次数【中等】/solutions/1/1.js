/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
  let maxFlip = 0,
    ans = 0
  for (let i = 0; i < flips.length; i++) {
    maxFlip = Math.max(maxFlip, flips[i])
    if (maxFlip === i + 1) ans++
  }
  return ans
}
