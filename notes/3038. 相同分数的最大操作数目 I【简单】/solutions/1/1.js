/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  // 第一次操作的分数作为基准
  const target = nums[0] + nums[1]
  let count = 1
  // 从第二对开始检查
  for (let i = 2; i + 1 < nums.length; i += 2) {
    if (nums[i] + nums[i + 1] === target) {
      count++
    } else {
      break
    }
  }
  return count
}
