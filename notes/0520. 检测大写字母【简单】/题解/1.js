/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  // 'A'.charCodeAt() // 65
  // 'a'.charCodeAt() // 97
  if (isUpperCase(0)) {
    // 首字母大写
    // 检查第二个字母是否存在，若不存在，则返回 true
    if (!word[1]) return true;
    // 后续所有字母必须和第二个字母保持一致，否则返回 false
    let isSecondUpperCase = isUpperCase(1);
    for (let i = 2; i < word.length; i++) {
      if (isUpperCase(i) !== isSecondUpperCase) return false;
    }
  } else {
    // 首字母非大写，一旦出现一个大写，返回 false
    for (let i = 1; i < word.length; i++) {
      if (isUpperCase(i)) return false;
    }
  }
  return true;

  function isUpperCase(index) {
    return word[index].charCodeAt() < 97;
  }
};
