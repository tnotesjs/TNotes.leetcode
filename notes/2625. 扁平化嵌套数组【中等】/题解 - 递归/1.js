/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
  if (depth === 0) return arr

  const result = []

  function flatten(array, currentDepth) {
    for (const item of array) {
      if (Array.isArray(item) && currentDepth > 0) {
        flatten(item, currentDepth - 1)
      } else {
        result.push(item)
      }
    }
  }

  flatten(arr, depth)
  return result
}