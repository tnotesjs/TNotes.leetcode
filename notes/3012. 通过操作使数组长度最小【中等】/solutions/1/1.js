/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumArrayLength = function (nums) {
  const min = Math.min(...nums)
  for (const x of nums) {
    if (x % min !== 0) return 1
  }
  let count = 0
  for (const x of nums) {
    if (x === min) count++
  }
  return Math.ceil(count / 2)
}
