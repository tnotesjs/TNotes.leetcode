/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  const n = arr.length

  // 长度小于 3 不可能是山脉数组
  if (n < 3) return false

  let i = 0

  // 上坡：找到递增序列的终点
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++
  }

  // 峰顶不能在数组开始或结束位置
  if (i === 0 || i === n - 1) return false

  // 下坡：检查剩余部分是否严格递减
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++
  }

  // 如果遍历完整个数组，说明是有效的山脉数组
  return i === n - 1
}
// @lc code=end

// #region 1
// solutions.1 - 暴力解法
// 时间复杂度：$O(n)$，最多遍历数组 1 次
// 空间复杂度：$O(1)$，只使用了常数级别的额外空间
// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// var validMountainArray = function (arr) {
//   const n = arr.length

//   // 长度小于 3 不可能是山脉数组
//   if (n < 3) return false

//   let i = 0

//   // 上坡：找到递增序列的终点
//   while (i < n - 1 && arr[i] < arr[i + 1]) {
//     i++
//   }

//   // 峰顶不能在数组开始或结束位置
//   if (i === 0 || i === n - 1) return false

//   // 下坡：检查剩余部分是否严格递减
//   while (i < n - 1 && arr[i] > arr[i + 1]) {
//     i++
//   }

//   // 如果遍历完整个数组，说明是有效的山脉数组
//   return i === n - 1
// }
// #endregion
