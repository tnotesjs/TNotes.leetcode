/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = 0
  let digitSum = 0

  for (const num of nums) {
    elementSum += num

    // 计算数字和
    let temp = num
    while (temp > 0) {
      digitSum += temp % 10
      temp = Math.floor(temp / 10)
    }
  }

  return Math.abs(elementSum - digitSum)
}
