/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const uniqueNums = [...new Set(nums)]
  uniqueNums.sort((a, b) => b - a)
  return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0]
}
