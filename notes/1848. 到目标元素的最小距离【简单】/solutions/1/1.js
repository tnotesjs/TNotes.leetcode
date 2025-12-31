/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let ans = Infinity

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) {
      const dist = Math.abs(i - start)
      if (dist < ans) ans = dist
      if (ans === 0) break
    }
  }

  return ans
}
