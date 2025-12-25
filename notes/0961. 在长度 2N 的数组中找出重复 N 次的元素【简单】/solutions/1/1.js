/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const seen = new Set()
  for (const x of nums) {
    if (seen.has(x)) return x
    seen.add(x)
  }
  return -1 // 按题意不会到这里
}
