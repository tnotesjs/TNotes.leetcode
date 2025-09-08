/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // 使用 Map 记录每个元素的出现次数、首次出现位置和最后出现位置
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const item = map.get(nums[i])
      item.count++
      item.end = i
    } else {
      map.set(nums[i], {
        count: 1,
        start: i,
        end: i,
      })
    }
  }

  // 找到数组的度（最大出现次数）
  let maxCount = 0
  for (const item of map.values()) {
    maxCount = Math.max(maxCount, item.count)
  }

  // 找到具有最大出现次数的元素中最短的子数组长度
  let minLength = nums.length
  for (const item of map.values()) {
    if (item.count === maxCount) {
      minLength = Math.min(minLength, item.end - item.start + 1)
    }
  }

  return minLength
}
// @lc code=end

// 暴力解法：
// 核心思路：找出数组的度对应的数字 x，计算：最后一次 x 出现的位置索引 - 第一次 x 出现的位置索引 + 1
// 如果有多个数字满足度，则返回最小的计算结果
// 时间复杂度：$O(n)$，需要遍历数组一次统计信息，再遍历 Map 两次
// 空间复杂度：$O(n)$，最坏情况下每个元素都不同，Map 需要存储 n 个条目
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findShortestSubArray = function (nums) {
//   // 使用 Map 记录每个元素的出现次数、首次出现位置和最后出现位置
//   const map = new Map()

//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       const item = map.get(nums[i])
//       item.count++
//       item.end = i
//     } else {
//       map.set(nums[i], {
//         count: 1,
//         start: i,
//         end: i,
//       })
//     }
//   }

//   // 找到数组的度（最大出现次数）
//   let maxCount = 0
//   for (const item of map.values()) {
//     maxCount = Math.max(maxCount, item.count)
//   }

//   // 找到具有最大出现次数的元素中最短的子数组长度
//   let minLength = nums.length
//   for (const item of map.values()) {
//     if (item.count === maxCount) {
//       minLength = Math.min(minLength, item.end - item.start + 1)
//     }
//   }

//   return minLength
// }
