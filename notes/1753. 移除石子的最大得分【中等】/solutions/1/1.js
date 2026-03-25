/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  const arr = [a, b, c].sort((x, y) => x - y)
  if (arr[0] + arr[1] <= arr[2]) return arr[0] + arr[1]
  return Math.floor((a + b + c) / 2)
}
