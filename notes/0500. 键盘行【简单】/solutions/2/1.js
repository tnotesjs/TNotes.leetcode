/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  // 定义键盘三行
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

  return words.filter((word) => {
    // 转为小写进行比较
    const lowerWord = word.toLowerCase()

    // 检查是否所有字符都在某一行中
    return rows.some((row) => {
      return lowerWord.split('').every((char) => row.includes(char))
    })
  })
}
