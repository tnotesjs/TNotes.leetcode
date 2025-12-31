/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const res = []

  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i]
    const val = nums[i + 1]

    for (let j = 0; j < freq; j += 1) {
      res.push(val)
    }
  }

  return res
}
