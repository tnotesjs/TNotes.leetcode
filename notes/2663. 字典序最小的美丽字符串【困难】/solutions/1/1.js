/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestBeautifulString = function (s, k) {
  const n = s.length
  const arr = s.split('').map((c) => c.charCodeAt(0) - 97)
  let i = n - 1
  arr[i]++

  while (i >= 0 && i < n) {
    if (arr[i] >= k) {
      i--
      if (i >= 0) arr[i]++
    } else if (
      (i >= 1 && arr[i] === arr[i - 1]) ||
      (i >= 2 && arr[i] === arr[i - 2])
    ) {
      arr[i]++
    } else {
      i++
      if (i < n) arr[i] = 0
    }
  }

  if (i < 0) return ''
  return arr.map((c) => String.fromCharCode(c + 97)).join('')
}
