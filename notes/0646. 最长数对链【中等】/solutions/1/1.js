/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1])
  let count = 1,
    end = pairs[0][1]
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] > end) {
      count++
      end = pairs[i][1]
    }
  }
  return count
}
