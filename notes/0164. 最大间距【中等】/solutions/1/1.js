/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  const n = nums.length
  if (n < 2) return 0
  let minVal = Math.min(...nums)
  let maxVal = Math.max(...nums)
  if (minVal === maxVal) return 0
  const bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)))
  const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1
  const bucketsMin = new Array(bucketCount).fill(Infinity)
  const bucketsMax = new Array(bucketCount).fill(-Infinity)
  for (const num of nums) {
    const idx = Math.floor((num - minVal) / bucketSize)
    bucketsMin[idx] = Math.min(bucketsMin[idx], num)
    bucketsMax[idx] = Math.max(bucketsMax[idx], num)
  }
  let maxGap = 0,
    prevMax = bucketsMax[0]
  for (let i = 1; i < bucketCount; i++) {
    if (bucketsMin[i] === Infinity) continue
    maxGap = Math.max(maxGap, bucketsMin[i] - prevMax)
    prevMax = bucketsMax[i]
  }
  return maxGap
}
