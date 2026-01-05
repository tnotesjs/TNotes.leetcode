/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const insertIndex = index[i]
    const value = nums[i]

    // 手动实现插入操作：将插入位置后的元素向右移动
    result.push(null) // 先扩展数组长度

    // 移动元素，为新元素腾出位置
    for (let j = result.length - 1; j > insertIndex; j--) {
      result[j] = result[j - 1]
    }

    // 在指定位置插入新值
    result[insertIndex] = value
  }

  return result
}
