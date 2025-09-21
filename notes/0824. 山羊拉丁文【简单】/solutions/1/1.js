/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const words = sentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    const word = words[i]

    // 根据首字母是否为元音进行不同处理
    if (vowels.has(word[0])) {
      // 以元音开头，直接添加"ma"
      words[i] = word + 'ma'
    } else {
      // 以辅音开头，移除首字母并放到末尾，再添加"ma"
      words[i] = word.substring(1) + word[0] + 'ma'
    }

    // 根据索引添加相应数量的"a"
    words[i] += 'a'.repeat(i + 1)
  }

  return words.join(' ')
}
