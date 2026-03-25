/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i]
  const rangeSum = (l, r) => prefix[r] - prefix[l]

  const solve = (L1, L2) => {
    let maxFirst = 0
    let res = 0
    for (let i = L1 + L2; i <= n; i++) {
      maxFirst = Math.max(maxFirst, rangeSum(i - L1 - L2, i - L2))
      res = Math.max(res, maxFirst + rangeSum(i - L2, i))
    }
    return res
  }

  return Math.max(solve(firstLen, secondLen), solve(secondLen, firstLen))
}
