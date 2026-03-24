/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let res = 0,
    count = 0
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      count++
      if (Math.random() < 1 / count) res = i
    }
  }
  return res
}
