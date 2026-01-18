/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let maxValue = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const value = (nums[i] - nums[j]) * nums[k]
        maxValue = Math.max(maxValue, value)
      }
    }
  }

  return maxValue
}
