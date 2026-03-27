/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  const bitCount = (n) => {
    let c = 0
    while (n) {
      c++
      n &= n - 1
    }
    return c
  }
  let prevMax = 0,
    curMin = nums[0],
    curMax = nums[0],
    curBits = bitCount(nums[0])

  for (let i = 1; i < nums.length; i++) {
    const bits = bitCount(nums[i])
    if (bits === curBits) {
      curMin = Math.min(curMin, nums[i])
      curMax = Math.max(curMax, nums[i])
    } else {
      if (prevMax > curMin) return false
      prevMax = curMax
      curMin = curMax = nums[i]
      curBits = bits
    }
  }

  return prevMax <= curMin
}
