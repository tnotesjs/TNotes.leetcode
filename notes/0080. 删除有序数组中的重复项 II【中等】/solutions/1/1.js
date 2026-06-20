/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0

  for (let fast = 0; fast < nums.length; fast++) {
    if (slow < 2 || nums[slow - 2] !== nums[fast]) {
      nums[slow++] = nums[fast]
    }
  }

  return slow
}
