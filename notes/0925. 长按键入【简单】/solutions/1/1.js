/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let i = 0 // 指向 name
  let j = 0 // 指向 typed

  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      // 正常匹配，双指针同时前进
      i++
      j++
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      // 长按：typed 当前字符可与前一个相同，继续消耗 typed
      j++
    } else {
      return false
    }
  }

  return i === name.length
}
