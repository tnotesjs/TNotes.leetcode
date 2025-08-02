/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 先对数组进行排序
  nums.sort((a, b) => a - b)

  // 使用双指针，以步长为2的方式遍历
  for (let i = 0; i < nums.length - 1; i += 2) {
    // 如果当前元素不等于下一个元素，说明当前元素是只出现一次的数字
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }

  // 如果前面都没找到，说明最后一个元素是只出现一次的数字
  return nums[nums.length - 1]
}
