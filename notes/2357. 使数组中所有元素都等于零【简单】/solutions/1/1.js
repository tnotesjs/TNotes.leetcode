/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  // 统计非零元素的不同值的数量
  const set = new Set()

  for (const num of nums) {
    if (num !== 0) {
      set.add(num)
    }
  }

  return set.size
}
