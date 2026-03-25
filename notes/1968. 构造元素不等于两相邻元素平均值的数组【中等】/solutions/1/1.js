/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b)
  const res = nums.slice()
  for (let i = 1; i < res.length - 1; i += 2) {
    ;[res[i], res[i + 1]] = [res[i + 1], res[i]]
  }
  return res
}
