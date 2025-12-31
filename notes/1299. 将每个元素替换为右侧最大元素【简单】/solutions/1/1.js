/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let mx = -1

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const cur = arr[i]
    arr[i] = mx
    if (cur > mx) mx = cur
  }

  return arr
}
