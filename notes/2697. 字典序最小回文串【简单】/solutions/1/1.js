/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  const arr = s.split('')
  let left = 0,
    right = arr.length - 1

  while (left < right) {
    // 选择字典序较小的字符
    if (arr[left] !== arr[right]) {
      const minChar = arr[left] < arr[right] ? arr[left] : arr[right]
      arr[left] = minChar
      arr[right] = minChar
    }
    left++
    right--
  }

  return arr.join('')
}
