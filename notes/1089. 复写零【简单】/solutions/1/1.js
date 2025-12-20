/**
 * @param {number[]} arr
 * @return {void}
 */
var duplicateZeros = function (arr) {
  let zeros = 0
  const n = arr.length
  for (let i = 0; i < n; i++) if (arr[i] === 0) zeros++
  let i = n - 1
  let j = n + zeros - 1
  while (i >= 0) {
    if (arr[i] !== 0) {
      if (j < n) arr[j] = arr[i]
      i--
      j--
    } else {
      // write two zeros
      if (j < n) arr[j] = 0
      j--
      if (j < n) arr[j] = 0
      j--
      i--
    }
  }
}
