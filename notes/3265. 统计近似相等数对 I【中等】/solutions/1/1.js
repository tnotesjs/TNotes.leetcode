/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function(nums) {
  const getVariants = (num) => {
    const s = String(num)
    const variants = new Set()
    variants.add(num)
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        const arr = s.split('')
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        variants.add(Number(arr.join('')))
      }
    }
    return variants
  }
  const seen = new Map()
  let count = 0
  for (const num of nums) {
    const variants = getVariants(num)
    for (const v of variants) {
      count += seen.get(v) || 0
    }
    seen.set(num, (seen.get(num) || 0) + 1)
  }
  return count
}
