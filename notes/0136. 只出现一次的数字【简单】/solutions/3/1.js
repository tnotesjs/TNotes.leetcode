/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set()

  // 遍历数组，如果数字已在集合中则删除，否则添加
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  }

  // 集合中剩下的唯一元素就是只出现一次的数字
  return [...set][0]
}
