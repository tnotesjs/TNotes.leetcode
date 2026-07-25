/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split('')
  const n = arr.length

  const reverse = (left, right) => {
    while (left < right) {
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }

  // 第一步：整体反转
  reverse(0, n - 1)

  // 第二步 + 第三步：逐单词反转 + 压缩空格
  let write = 0,
    read = 0
  while (read < n) {
    while (read < n && arr[read] === ' ') read++
    if (read >= n) break

    if (write > 0) arr[write++] = ' '

    const wordStart = write
    while (read < n && arr[read] !== ' ') arr[write++] = arr[read++]
    reverse(wordStart, write - 1)
  }

  return arr.slice(0, write).join('')
}

// 注：JS 字符串不可变，解题时需用 split('') 转为数组实现原地修改，空间 O(n)
