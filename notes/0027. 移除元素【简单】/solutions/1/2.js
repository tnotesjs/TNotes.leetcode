/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 满足条件的成员数量
  let len = 0
  for (let i = 0; i < nums.length; i++) {
    // nums[i] 是需要被移除的成员
    if (nums[i] === val) {
      // 找后续不为 val 的成员与之交换位置
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== val) {
          nums[i] = nums[j]
          nums[j] = val
          len++
          break
        }
        // 优化：
        // 如果在某次内循环中找到结尾都没有找到不是 val 的成员
        // 这意味着后边儿都是需要被移除的成员，直接 return len
        if (j === nums.length - 1) return len
      }
    } else {
      // nums[i] 不是需要被移除的成员，满足条件的成员数量 + 1
      len++
    }
  }
  return len
}
