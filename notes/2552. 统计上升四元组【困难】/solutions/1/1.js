/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const n = nums.length
  let ans = 0
  // f[j] = 满足 i < j < k 且 nums[i] < nums[k] < nums[j] 的 (i, k) 对数
  const f = new Array(n).fill(0)
  for (let k = 1; k < n; k++) {
    let cntLess = 0 // j 之前小于 nums[k] 的元素个数
    for (let j = 0; j < k; j++) {
      if (nums[j] < nums[k]) {
        ans += f[j] // k 作为 l，j 作为 j
        cntLess++
      } else if (nums[j] > nums[k]) {
        f[j] += cntLess // (j, k) 作为中间对
      }
    }
  }
  return ans
}
