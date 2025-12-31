/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let res = 0

  for (const num of nums) {
    const digits = String(num).length
    if (digits % 2 === 0) res += 1
  }

  return res
}
