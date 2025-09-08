/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 计算数组总和
  const sum = nums.reduce((sum, num) => sum + num, 0)

  let l_sum = 0

  // 遍历数组，寻找中心下标
  for (let i = 0; i < nums.length; i++) {
    // 右侧元素和 = 总和 - 左侧元素和 - 当前元素
    const r_sum = sum - l_sum - nums[i]

    // 如果左侧和等于右侧和，则找到中心下标
    if (l_sum === r_sum) return i

    // 更新左侧元素和
    l_sum += nums[i]
  }

  // 未找到中心下标
  return -1
}
