/**
 * @param {number[]} nums
 * @return {void}
 */
var wiggleSort = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b)
  const n = nums.length
  let left = Math.floor((n - 1) / 2),
    right = n - 1
  for (let i = 0; i < n; i++) {
    nums[i] = i % 2 === 0 ? sorted[left--] : sorted[right--]
  }
}
