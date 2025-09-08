/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const result = []

  // 先添加所有偶数
  for (const num of nums) {
    if (num % 2 === 0) {
      result.push(num)
    }
  }

  // 再添加所有奇数
  for (const num of nums) {
    if (num % 2 === 1) {
      result.push(num)
    }
  }

  return result
}
