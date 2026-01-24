/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
  let count = 0

  // 逆向思考：从 target 变到 startValue
  // target 小于等于 startValue 时，只能不断递增
  while (target > startValue) {
    if (target % 2 === 0) {
      // target 为偶数，除以 2（相当于正向的乘 2）
      target /= 2
    } else {
      // target 为奇数，加 1 变成偶数（相当于正向的先减 1）
      target++
    }
    count++
  }

  // target <= startValue 时，只能递减
  return count + (startValue - target)
}
