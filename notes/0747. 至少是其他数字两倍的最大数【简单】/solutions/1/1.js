/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  // 找到最大值和第二大值
  let max = -Infinity
  let secondMax = -Infinity
  let maxIndex = -1

  // 遍历数组找到最大值和第二大值
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max
      max = nums[i]
      maxIndex = i
    } else if (nums[i] > secondMax) {
      secondMax = nums[i]
    }
  }

  // 判断最大值是否至少是第二大值的两倍
  return max >= secondMax * 2 ? maxIndex : -1
}
