/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return words.filter((word) =>
    /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(word)
  )
}
