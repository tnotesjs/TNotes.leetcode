/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {}

// 按规则模拟，奇数减一，偶数除二
var numberOfSteps = function (num) {
  let steps = 0
  let x = num

  while (x > 0) {
    if (x & 1) x -= 1
    else x >>= 1
    steps++
  }

  return steps
}
