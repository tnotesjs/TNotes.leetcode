/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 使用 Set 获取所有不重复的数字
  const set = new Set(nums)

  // 计算所有不重复数字的和的两倍
  let sumOfUnique = 0
  for (const num of set) {
    sumOfUnique += num
  }
  sumOfUnique *= 2

  // 计算数组中所有数字的和
  let sumOfAll = 0
  for (const num of nums) {
    sumOfAll += num
  }

  // 两者之差就是只出现一次的数字
  return sumOfUnique - sumOfAll
}
