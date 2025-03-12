/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
  if (depth === 0) return arr;

  while (depth > 0) {
    let nextArr = []

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        nextArr.push(...arr[i])
      } else {
        nextArr.push(arr[i])
      }
    }

    arr = nextArr
    depth--
  }

  return arr
}