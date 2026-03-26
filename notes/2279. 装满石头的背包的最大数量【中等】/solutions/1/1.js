/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function (capacity, rocks, additionalRocks) {
  const n = capacity.length
  const need = new Array(n)
  for (let i = 0; i < n; i++) need[i] = capacity[i] - rocks[i]
  need.sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < n; i++) {
    if (additionalRocks >= need[i]) {
      additionalRocks -= need[i]
      res++
    } else break
  }
  return res
}
