/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const limit = Math.floor(arr.length / 4)
  let count = 1

  for (let i = 1; i < arr.length; i += 1) {
    count = arr[i] === arr[i - 1] ? count + 1 : 1
    if (count > limit) return arr[i]
  }

  return arr[0]
}
