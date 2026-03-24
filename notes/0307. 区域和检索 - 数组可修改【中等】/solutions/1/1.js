/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.n = nums.length
  this.tree = new Array(this.n + 1).fill(0)
  this.nums = new Array(this.n).fill(0)
  for (let i = 0; i < this.n; i++) this.update(i, nums[i])
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  const delta = val - this.nums[index]
  this.nums[index] = val
  for (let i = index + 1; i <= this.n; i += i & -i) {
    this.tree[i] += delta
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const query = (i) => {
    let s = 0
    for (; i > 0; i -= i & -i) s += this.tree[i]
    return s
  }
  return query(right + 1) - query(left)
}
