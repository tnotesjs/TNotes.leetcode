/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
  // 计算数位和
  const digitSum = (n) => {
    let sum = 0
    while (n > 0) {
      sum += n % 10
      n = Math.floor(n / 10)
    }
    return sum
  }

  // 从小到大遍历，找到第一个满足条件的下标
  for (let i = 0; i < nums.length; i++) {
    if (digitSum(nums[i]) === i) {
      return i
    }
  }

  return -1
}
