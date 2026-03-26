/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function (nums, k, x) {
  const cnt = new Array(101).fill(0) // 偏移 50，映射 [-50, 50] -> [0, 100]
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    cnt[nums[i] + 50]++
    if (i >= k) cnt[nums[i - k] + 50]--
    if (i >= k - 1) {
      let count = 0
      let beauty = 0
      for (let j = 0; j < 101; j++) {
        count += cnt[j]
        if (count >= x) {
          beauty = j - 50
          break
        }
      }
      ans.push(beauty < 0 ? beauty : 0)
    }
  }
  return ans
}
