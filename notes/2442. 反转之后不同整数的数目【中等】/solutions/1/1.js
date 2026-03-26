/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const set = new Set(nums)
  for (const x of nums) {
    set.add(Number(String(x).split('').reverse().join('')))
  }
  return set.size
}
