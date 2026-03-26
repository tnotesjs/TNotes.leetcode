/**
 * @param {number[]} nums
 * @return {number}
 */
var totalSteps = function (nums) {
  const n = nums.length
  const stack = [] // [index, steps]
  let res = 0
  for (let i = n - 1; i >= 0; i--) {
    let steps = 0
    while (stack.length && nums[i] > nums[stack[stack.length - 1][0]]) {
      steps = Math.max(steps + 1, stack.pop()[1])
    }
    stack.push([i, steps])
    res = Math.max(res, steps)
  }
  return res
}
