/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === -1) continue
    let count = 0,
      j = i
    while (nums[j] !== -1) {
      const next = nums[j]
      nums[j] = -1
      j = next
      count++
    }
    res = Math.max(res, count)
  }
  return res
}
