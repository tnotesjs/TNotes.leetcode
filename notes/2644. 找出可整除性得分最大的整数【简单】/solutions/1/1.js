/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let maxScore = -1
  let result = Infinity

  for (const divisor of divisors) {
    // 计算当前除数的可整除性得分
    let score = 0
    for (const num of nums) {
      if (num % divisor === 0) {
        score++
      }
    }

    // 更新结果：得分更大，或得分相同但除数更小
    if (score > maxScore || (score === maxScore && divisor < result)) {
      maxScore = score
      result = divisor
    }
  }

  return result
}
