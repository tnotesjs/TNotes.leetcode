/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let res = 0

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (Math.abs(arr[i] - arr[j]) > a) continue
      for (let k = j + 1; k < arr.length; k += 1) {
        if (Math.abs(arr[j] - arr[k]) > b) continue
        if (Math.abs(arr[i] - arr[k]) <= c) res += 1
      }
    }
  }

  return res
}
