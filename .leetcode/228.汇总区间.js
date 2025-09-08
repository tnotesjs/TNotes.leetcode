/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [] // 边界情况：空数组

  const result = []
  let start = nums[0] // 当前区间的起始值
  let end = nums[0] // 当前区间的结束值

  for (let i = 1; i < nums.length; i++) { // 从第二个元素开始遍历
    if (nums[i] === end + 1) { // 如果当前元素是前一个元素的连续数字
      end = nums[i] // 更新区间结束值
    } else { // 出现不连续，需要将当前区间加入结果
      if (start === end) { // 单个数字的情况
        result.push(start.toString())
      } else { // 区间的情况
        result.push(`${start}->${end}`)
      }
      // 开始新的区间
      start = nums[i]
      end = nums[i]
    }
  }

  // 处理最后一个区间
  if (start === end) {
    result.push(start.toString())
  } else {
    result.push(`${start}->${end}`)
  }

  return result
}
// @lc code=end

// test
summaryRanges([0,1,2,4,5,7]) // => ["0->2","4->5","7"]
summaryRanges([0,2,3,4,6,8,9]) // => ["0","2->4","6","8->9"]
