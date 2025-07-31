/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // 使用三个变量分别记录最大、第二大、第三大的数
  // 初始化为负无穷，表示还没有赋值
  let first = -Infinity // 最大
  let second = -Infinity // 第二大
  let third = -Infinity // 第三大

  for (const num of nums) {
    // 如果当前数字已经存在于前三大的数中，跳过
    if (num === first || num === second || num === third) {
      continue
    }

    // 更新前三大的数
    if (num > first) {
      // 当前数字比最大值还大，更新 third、second、first
      third = second
      second = first
      first = num
    } else if (num > second) {
      // 当前数字比第二大值大，但比最大值小，更新 third、second
      third = second
      second = num
    } else if (num > third) {
      // 当前数字比第三大值大，更新 third
      third = num
    }
  }

  // 如果第三大值仍然是初始值，说明不存在第三大的数，返回最大值
  return third === -Infinity ? first : third
}
