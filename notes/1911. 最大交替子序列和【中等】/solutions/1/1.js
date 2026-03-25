/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  let even = 0,
    odd = 0
  for (const num of nums) {
    const newEven = Math.max(even, odd + num)
    const newOdd = Math.max(odd, even - num)
    even = newEven
    odd = newOdd
  }
  return even
}
