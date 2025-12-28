/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const arr = s.split('')
  let l = 0
  let r = arr.length - 1

  // 判断是否为字母的辅助函数
  const isLetter = (ch) => (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')

  while (l < r) {
    // 跳过非字母字符
    if (!isLetter(arr[l])) {
      l++
      continue
    }
    if (!isLetter(arr[r])) {
      r--
      continue
    }
    // 字母字符交换
    const t = arr[l]
    arr[l] = arr[r]
    arr[r] = t
    l++
    r--
  }
  return arr.join('')
}
