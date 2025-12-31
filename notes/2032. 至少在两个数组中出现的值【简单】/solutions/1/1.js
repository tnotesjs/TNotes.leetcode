/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const seenCount = new Array(101).fill(0)

  const addSet = (arr) => {
    const uniq = new Set(arr)
    for (const v of uniq) seenCount[v] += 1
  }

  addSet(nums1)
  addSet(nums2)
  addSet(nums3)

  const ans = []
  for (let v = 1; v <= 100; v += 1) {
    if (seenCount[v] >= 2) ans.push(v)
  }
  return ans
}
