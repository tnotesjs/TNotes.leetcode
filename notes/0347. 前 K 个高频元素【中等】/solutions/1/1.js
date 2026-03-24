/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1)
  // 桶排序
  const buckets = new Array(nums.length + 1).fill(null)
  for (const [num, freq] of map) {
    if (!buckets[freq]) buckets[freq] = []
    buckets[freq].push(num)
  }
  const res = []
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    if (buckets[i]) res.push(...buckets[i])
  }
  return res.slice(0, k)
}
