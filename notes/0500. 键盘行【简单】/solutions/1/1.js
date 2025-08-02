/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  // 定义键盘三行的字母（包含大小写）
  const row1 = new Set('qwertyuiopQWERTYUIOP')
  const row2 = new Set('asdfghjklASDFGHJKL')
  const row3 = new Set('zxcvbnmZXCVBNM')

  // 判断字符属于哪一行
  const getRow = (char) => {
    if (row1.has(char)) return 1
    if (row2.has(char)) return 2
    if (row3.has(char)) return 3
    return 0
  }

  const result = []

  // 遍历每个单词
  for (const word of words) {
    if (word.length === 0) {
      result.push(word)
      continue
    }

    // 获取第一个字符所在的行
    const firstRow = getRow(word[0])
    let isCommonRow = true

    // 检查单词中所有字符是否都在同一行
    for (let i = 1; i < word.length; i++) {
      if (getRow(word[i]) !== firstRow) {
        isCommonRow = false
        break
      }
    }

    // 如果都在同一行，则加入结果
    if (isCommonRow) {
      result.push(word)
    }
  }

  return result
}
