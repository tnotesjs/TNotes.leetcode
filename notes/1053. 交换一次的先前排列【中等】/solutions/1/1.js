/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
  const n = arr.length
  let i = n - 2
  // find first decreasing pair from right
  while (i >= 0 && arr[i] <= arr[i + 1]) i--
  if (i < 0) return arr
  // find the largest element less than arr[i] to the right
  let j = n - 1
  while (arr[j] >= arr[i]) j--
  // skip duplicates
  while (j > 0 && arr[j] === arr[j - 1]) j--
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
  return arr
}
