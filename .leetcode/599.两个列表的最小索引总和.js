/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let minSum = Infinity
  const result = []

  // 双重循环查找共同元素
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      // 如果找到相同元素
      if (list1[i] === list2[j]) {
        const sum = i + j

        if (sum < minSum) {
          // 找到更小索引和，更新结果数组
          minSum = sum
          result.length = 0 // 清空原数组
          result.push(list1[i])
        } else if (sum === minSum) {
          // 索引和相等，添加到结果数组
          result.push(list1[i])
        }
        // 由于是从前往后遍历，后面的 j 值只会更大，
        // 再继续查已经没有意义了，可以提前结束内层循环。
        break
      }
    }
  }

  return result
}
// @lc code=end
