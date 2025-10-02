/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const words = sentence.split(' ')

  return words
    .map((word, index) => {
      const firstChar = word[0]
      let result = ''

      // 根据首字母是否为元音进行不同处理
      if (vowels.has(firstChar.toLowerCase())) {
        // 以元音开头
        result = word
      } else {
        // 以辅音开头
        result = word.substring(1) + firstChar
      }

      // 添加"ma"和相应数量的"a"
      return result + 'ma' + 'a'.repeat(index + 1)
    })
    .join(' ')
}
