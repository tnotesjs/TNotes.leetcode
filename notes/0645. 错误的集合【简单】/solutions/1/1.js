/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length
  const count = new Array(n + 1).fill(0)
  let duplicate = -1
  let missing = -1

  // 统计每个数字出现的次数
  for (const num of nums) {
    count[num]++
  }

  // 找到重复的数字和丢失的数字
  for (let i = 1; i <= n; i++) {
    if (count[i] === 2) {
      duplicate = i
    } else if (count[i] === 0) {
      missing = i
    }
  }

  return [duplicate, missing]
}
