/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0

  // 对于32位整数的每一位
  for (let i = 0; i < 32; i++) {
    let count = 0

    // 统计第 i 位上为 1 的数字个数
    for (const num of nums) {
      if ((num >> i) & 1) {
        count++
      }
    }

    // 如果不能被 3 整除，说明只出现一次的数字在第 i 位上是 1
    if (count % 3 !== 0) {
      result |= 1 << i
    }
  }

  return result
}
