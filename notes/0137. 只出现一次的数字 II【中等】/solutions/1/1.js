/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ones = 0,
    twos = 0

  for (const num of nums) {
    // ones 记录二进制位出现 1 次的数字，twos 记录出现 2 次的数字
    ones = (ones ^ num) & ~twos
    twos = (twos ^ num) & ~ones
  }

  return ones
}
