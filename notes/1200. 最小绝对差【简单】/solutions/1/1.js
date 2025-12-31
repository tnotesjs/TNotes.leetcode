/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b)

  let minDiff = Number.POSITIVE_INFINITY
  const res = []

  for (let i = 1; i < arr.length; i += 1) {
    const diff = arr[i] - arr[i - 1]

    if (diff < minDiff) {
      minDiff = diff
      res.length = 0
      res.push([arr[i - 1], arr[i]])
    } else if (diff === minDiff) {
      res.push([arr[i - 1], arr[i]])
    }
  }

  return res
}
