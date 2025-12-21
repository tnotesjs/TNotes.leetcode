/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  // 条件1：至少3个字符
  if (word.length < 3) return false

  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let hasVowel = false
  let hasConsonant = false

  for (const c of word) {
    // 条件2：只能包含数字和字母
    if (!/[a-zA-Z0-9]/.test(c)) return false

    if (/[a-zA-Z]/.test(c)) {
      if (vowels.has(c)) {
        hasVowel = true
      } else {
        hasConsonant = true
      }
    }
  }

  // 条件3和4：至少包含一个元音和一个辅音
  return hasVowel && hasConsonant
}
