/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const arr = s.split('')
  let l = 0
  let r = arr.length - 1

  const isLetter = (ch) => (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')

  while (l < r) {
    if (!isLetter(arr[l])) {
      l++
      continue
    }
    if (!isLetter(arr[r])) {
      r--
      continue
    }
    const t = arr[l]
    arr[l] = arr[r]
    arr[r] = t
    l++
    r--
  }
  return arr.join('')
}
