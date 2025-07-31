/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 先排序
  nums.sort((a, b) => a - b)

  // 遍历查找第一个不匹配的位置
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }

  // 如果都没找到，说明缺少的是最后一个数
  return nums.length
}
