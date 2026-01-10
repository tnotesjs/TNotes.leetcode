/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const rank = new Map()
  for (let i = 0; i < arr2.length; i++) rank.set(arr2[i], i)
  const base = arr2.length
  return arr1.slice().sort((a, b) => {
    const ra = rank.has(a) ? rank.get(a) : base + a
    const rb = rank.has(b) ? rank.get(b) : base + b
    return ra - rb
  })
}
