/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  this.map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!this.map.has(arr[i])) this.map.set(arr[i], [])
    this.map.get(arr[i]).push(i)
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  const idxs = this.map.get(value)
  if (!idxs) return 0
  const lo = lowerBound(idxs, left)
  const hi = upperBound(idxs, right)
  return hi - lo
}

function lowerBound(arr, target) {
  let lo = 0,
    hi = arr.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (arr[mid] < target) lo = mid + 1
    else hi = mid
  }
  return lo
}

function upperBound(arr, target) {
  let lo = 0,
    hi = arr.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (arr[mid] <= target) lo = mid + 1
    else hi = mid
  }
  return lo
}
