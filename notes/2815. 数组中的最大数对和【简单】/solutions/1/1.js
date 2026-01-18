/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
  // 获取数字的数位上的最大数字
  const getMaxDigit = (num) => {
    let max = 0
    while (num > 0) {
      max = Math.max(max, num % 10)
      num = Math.floor(num / 10)
    }
    return max
  }

  let maxPairSum = -1

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (getMaxDigit(nums[i]) === getMaxDigit(nums[j])) {
        maxPairSum = Math.max(maxPairSum, nums[i] + nums[j])
      }
    }
  }

  return maxPairSum
}
