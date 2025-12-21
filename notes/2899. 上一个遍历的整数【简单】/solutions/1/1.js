/**
 * @param {number[]} nums
 * @return {number[]}
 */
var lastVisitedIntegers = function (nums) {
  const seen = [] // 存储正整数
  const ans = []
  let k = 0 // 连续 -1 的计数

  for (const num of nums) {
    if (num === -1) {
      k++
      // k 超过 seen 长度，返回 -1
      if (k > seen.length) {
        ans.push(-1)
      } else {
        // seen 的第 k 个元素（从头部开始）
        ans.push(seen[k - 1])
      }
    } else {
      // 正整数添加到 seen 头部
      seen.unshift(num)
      k = 0 // 重置连续 -1 计数
    }
  }
  return ans
}
