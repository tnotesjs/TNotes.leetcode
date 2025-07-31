/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // 对数组进行排序
  nums.sort((a, b) => a - b)

  let sum = 0

  // 每两个数分为一组，取每组的第一个数（较小的数）相加
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }

  return sum
}
