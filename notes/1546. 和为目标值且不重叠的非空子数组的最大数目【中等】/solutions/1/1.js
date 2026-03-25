/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  const seen = new Set([0])
  let sum = 0,
    count = 0
  for (const x of nums) {
    sum += x
    if (seen.has(sum - target)) {
      count++
      seen.clear()
      seen.add(sum)
    } else {
      seen.add(sum)
    }
  }
  return count
}
