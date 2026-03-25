/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const map = new Map()
  map.set(0, 1)
  let prefixSum = 0
  let count = 0

  for (const num of nums) {
    prefixSum += num
    count += map.get(prefixSum - goal) || 0
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
  }

  return count
}
