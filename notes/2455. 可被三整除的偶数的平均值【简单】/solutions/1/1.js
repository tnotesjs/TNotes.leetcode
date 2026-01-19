/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0
  let count = 0

  for (const num of nums) {
    // 可被 3 整除的偶数等价于可被 6 整除
    if (num % 6 === 0) {
      sum += num
      count += 1
    }
  }

  return count === 0 ? 0 : Math.floor(sum / count)
}
