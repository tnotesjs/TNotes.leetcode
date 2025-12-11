/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const arr = s.split('')
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    // 从左找元音
    while (left < right && !vowels.has(arr[left])) {
      left++
    }
    // 从右找元音
    while (left < right && !vowels.has(arr[right])) {
      right--
    }

    // 交换元音字母
    if (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  return arr.join('')
}
