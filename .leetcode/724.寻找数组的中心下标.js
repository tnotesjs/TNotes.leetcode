/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
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
// @lc code=end

// #region 1
/* 解法.1 - 暴力解法
时间复杂度：$O(2n)$，需要遍历数组两次（一次计算总和，一次寻找中心下标）
空间复杂度：$O(1)$，只使用了常数级别的额外空间 */
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
// #endregion
