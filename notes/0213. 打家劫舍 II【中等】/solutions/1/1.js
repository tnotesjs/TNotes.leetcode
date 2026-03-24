/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  function robRange(lo, hi) {
    let prev = 0,
      curr = 0
    for (let i = lo; i <= hi; i++) {
      const temp = Math.max(curr, prev + nums[i])
      prev = curr
      curr = temp
    }
    return curr
  }
  return Math.max(robRange(0, n - 2), robRange(1, n - 1))
}
