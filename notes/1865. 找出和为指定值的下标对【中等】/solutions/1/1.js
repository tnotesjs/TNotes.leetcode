/**
 * @param {number[]} nums
 */
var FindSumPairs = function (nums1, nums2) {
  this.nums1 = nums1
  this.nums2 = nums2
  this.cnt = new Map()
  for (const x of nums2) this.cnt.set(x, (this.cnt.get(x) || 0) + 1)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const old = this.nums2[index]
  this.cnt.set(old, this.cnt.get(old) - 1)
  this.nums2[index] += val
  const nw = this.nums2[index]
  this.cnt.set(nw, (this.cnt.get(nw) || 0) + 1)
}

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let ans = 0
  for (const x of this.nums1) {
    ans += this.cnt.get(tot - x) || 0
  }
  return ans
}
