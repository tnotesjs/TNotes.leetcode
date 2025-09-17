/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const words = sentence.split(' ')

  return words
    .map((word, index) => {
      let result = ''

      // 使用正则表达式判断首字母是否为元音
      if (/^[aeiouAEIOU]/.test(word)) {
        // 以元音开头
        result = word
      } else {
        // 以辅音开头
        result = word.substring(1) + word[0]
      }

      // 添加"ma"和相应数量的"a"
      return result + 'ma' + 'a'.repeat(index + 1)
    })
    .join(' ')
}
// @lc code=end
