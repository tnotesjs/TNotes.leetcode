/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 在 JavaScript 中，数组的原生排序方法是 Array.prototype.sort
  return nums.sort((a, b) => a - b);
};
