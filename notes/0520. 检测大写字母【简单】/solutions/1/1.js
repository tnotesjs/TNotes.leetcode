/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let upperCount = 0

  for (let char of word) {
    if (char >= 'A' && char <= 'Z') {
      upperCount++
    }
  }

  // 三种合法情况：
  return (
    // 1. 全部大写
    upperCount === word.length ||
    // 2. 全部小写
    upperCount === 0 ||
    // 3. 只有首字母大写
    (upperCount === 1 && word[0] >= 'A' && word[0] <= 'Z')
  )
}
