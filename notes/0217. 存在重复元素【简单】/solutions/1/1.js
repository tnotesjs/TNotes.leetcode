/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 利用Set的特性，自动去重
  // 比较原数组长度与Set的大小
  return new Set(nums).size !== nums.length
}
