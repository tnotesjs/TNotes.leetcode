/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  // 摩尔斯密码表，按字母顺序排列 a-z
  const morseCodes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  // 使用 Set 存储不同的摩尔斯密码
  const transformations = new Set()

  for (const word of words) {
    let morse = ''
    // 将单词转换为摩尔斯密码
    for (const char of word) {
      // 计算字符相对于 'a' 的偏移量作为索引。
      // 提示信息中表明所有字母都是小写，因此这里无需考虑大小写问题。
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
      morse += morseCodes[index]
    }
    // 将转换后的摩尔斯密码加入集合
    transformations.add(morse)
  }

  // 返回不同摩尔斯密码的数量
  return transformations.size
}
// @lc code=end
