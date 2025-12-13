/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map() // 存储每个元素的下一个更大元素
  const stack = [] // 单调递减栈

  // 遍历 nums2，用单调栈找出每个元素的下一个更大元素
  for (let num of nums2) {
    // 当前元素比栈顶大，说明找到了栈顶元素的下一个更大元素
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num)
    }
    stack.push(num)
  }

  // 栈中剩余元素没有下一个更大元素，设为 -1
  while (stack.length > 0) {
    map.set(stack.pop(), -1)
  }

  // 根据 nums1 查表得到结果
  return nums1.map((num) => map.get(num))
}
