/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
  const positions = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) positions.push(i)
  }
  return queries.map(q => q <= positions.length ? positions[q - 1] : -1)
}
