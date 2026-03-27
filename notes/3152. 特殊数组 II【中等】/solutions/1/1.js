/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
  const n = nums.length
  // prefix[i] = 从 0 到 i 有多少个不满足奇偶交替的位置
  const prefix = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + ((nums[i] % 2 === nums[i - 1] % 2) ? 1 : 0)
  }
  return queries.map(([l, r]) => prefix[r] - prefix[l] === 0)
}
