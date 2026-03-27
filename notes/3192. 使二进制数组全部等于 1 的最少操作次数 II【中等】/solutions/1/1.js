/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let ops = 0
  for (let i = 0; i < nums.length; i++) {
    // 实际值 = nums[i] ^ (ops % 2)
    if ((nums[i] ^ (ops & 1)) === 0) {
      ops++
    }
  }
  return ops
}
