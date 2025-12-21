/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
  let count = 0
  let position = 0 // 当前位置，0 表示边界
  for (const num of nums) {
    position += num
    // 每次移动后检查是否回到边界
    if (position === 0) {
      count++
    }
  }
  return count
}
