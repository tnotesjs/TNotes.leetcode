/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b)
  let moves = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const target = nums[i - 1] + 1
      moves += target - nums[i]
      nums[i] = target
    }
  }

  return moves
}
