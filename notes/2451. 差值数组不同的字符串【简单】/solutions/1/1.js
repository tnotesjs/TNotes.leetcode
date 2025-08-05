/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  // 计算字符串的差值数组
  const getDiffArray = (word) => {
    const diff = []
    for (let i = 1; i < word.length; i++) {
      diff.push(word.charCodeAt(i) - word.charCodeAt(i - 1))
    }
    return diff.join(',') // 转换为字符串便于比较
  }

  // 获取前三个字符串的差值数组
  const diff0 = getDiffArray(words[0])
  const diff1 = getDiffArray(words[1])
  const diff2 = getDiffArray(words[2])

  // 前两个相同
  if (diff0 === diff1) {
    // 如果前两个相同，第三个不同，第三个就是答案。
    if (diff0 !== diff2) {
      return words[2]
    }
    // 如果前 3 个都相同，则需要从后续 word 中找答案。
    for (let i = 3; i < words.length; i++) {
      if (getDiffArray(words[i]) !== diff0) {
        return words[i]
      }
    }
  }
  // 前两个不同
  else {
    // 如果前两个不同，那么答案必在前两个中。
    // 此时，需要看第三个来判断哪个是答案。
    if (diff0 === diff2) {
      return words[1]
    } else {
      return words[0]
    }
  }

  // 如果前三个都相同，则遍历剩下的找不同的
}
