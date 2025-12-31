/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const evens = []
  const odds = []

  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) evens.push(nums[i])
    else odds.push(nums[i])
  }

  evens.sort((a, b) => a - b)
  odds.sort((a, b) => b - a)

  const res = []
  let ei = 0
  let oi = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) res.push(evens[ei++])
    else res.push(odds[oi++])
  }

  return res
}
