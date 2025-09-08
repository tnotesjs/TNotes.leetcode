/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
// #region - 一次遍历维护三个变量
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var thirdMax = function (nums) {
//   // 使用三个变量分别记录最大、第二大、第三大的数
//   // 初始化为负无穷，表示还没有赋值
//   let first = -Infinity // 最大
//   let second = -Infinity // 第二大
//   let third = -Infinity // 第三大

//   for (const num of nums) {
//     // 如果当前数字已经存在于前三大的数中，跳过
//     if (num === first || num === second || num === third) {
//       continue
//     }

//     // 更新前三大的数
//     if (num > first) {
//       // 当前数字比最大值还大，更新 third、second、first
//       third = second
//       second = first
//       first = num
//     } else if (num > second) {
//       // 当前数字比第二大值大，但比最大值小，更新 third、second
//       third = second
//       second = num
//     } else if (num > third) {
//       // 当前数字比第三大值大，更新 third
//       third = num
//     }
//   }

//   // 如果第三大值仍然是初始值，说明不存在第三大的数，返回最大值
//   return third === -Infinity ? first : third
// }
// #endregion

// #region - 使用 Set 去重 + 排序
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var thirdMax = function (nums) {
//   const uniqueNums = [...new Set(nums)]
//   uniqueNums.sort((a, b) => b - a)
//   return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0]
// }
// #endregion

// #region - 使用数组维护前三大的数
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const topThree = []

  for (const num of nums) {
    if (topThree.includes(num)) {
      continue
    }

    topThree.push(num)
    topThree.sort((a, b) => b - a)

    // 保持数组长度为3
    if (topThree.length > 3) {
      topThree.pop()
    }
  }

  // 如果有 3 个数，返回最小的（第三大）；否则返回最大的
  return topThree.length === 3 ? topThree[2] : topThree[0]
}
// #endregion
// @lc code=end

// 测试
console.log(thirdMax([3, 2, 1])) // 1
console.log(thirdMax([1, 2])) // 2
console.log(thirdMax([2, 2, 3, 1])) // 1
console.log(thirdMax([1, 2, 2, 5, 3, 5])) // 2
