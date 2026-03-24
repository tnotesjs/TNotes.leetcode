/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]])
  let prefixSum = 0,
    count = 0
  for (const num of nums) {
    prefixSum += num
    count += map.get(prefixSum - k) || 0
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
  }
  return count
}
