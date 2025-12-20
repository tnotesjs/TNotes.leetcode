/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length
  const res = new Array(n)
  let l = 0
  let r = n - 1
  let k = n - 1
  while (l <= r) {
    const lsq = nums[l] * nums[l]
    const rsq = nums[r] * nums[r]
    if (lsq > rsq) {
      res[k--] = lsq
      l++
    } else {
      res[k--] = rsq
      r--
    }
  }
  return res
}
