/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let steps = 0,
    carry = 0
  for (let i = s.length - 1; i > 0; i--) {
    const bit = s[i] - '0' + carry
    if (bit % 2 === 1) {
      // 奇数：加 1 变偶数，再除 2
      steps += 2
      carry = 1
    } else {
      // 偶数：直接除 2
      steps += 1
    }
  }
  return steps + carry
}
