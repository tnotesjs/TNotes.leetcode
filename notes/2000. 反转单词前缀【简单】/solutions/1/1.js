/**
 * @param {string} word
 * @param {string} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const idx = word.indexOf(ch)
  if (idx === -1) return word

  const arr = word.split('')
  for (let l = 0, r = idx; l < r; l += 1, r -= 1) {
    const tmp = arr[l]
    arr[l] = arr[r]
    arr[r] = tmp
  }

  return arr.join('')
}
