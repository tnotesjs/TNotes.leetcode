/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
  const cnt = new Map()
  for (const x of nums) {
    const r = ((x % value) + value) % value
    cnt.set(r, (cnt.get(r) || 0) + 1)
  }
  for (let mex = 0; ; mex++) {
    const r = mex % value
    if (!cnt.get(r)) return mex
    cnt.set(r, cnt.get(r) - 1)
  }
}
