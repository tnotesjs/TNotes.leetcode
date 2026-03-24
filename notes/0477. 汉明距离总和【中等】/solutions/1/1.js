/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let res = 0
  for (let bit = 0; bit < 30; bit++) {
    let ones = 0
    for (const num of nums) if ((num >> bit) & 1) ones++
    res += ones * (nums.length - ones)
  }
  return res
}
