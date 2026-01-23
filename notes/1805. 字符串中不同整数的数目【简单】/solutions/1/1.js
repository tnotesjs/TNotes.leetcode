/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const set = new Set() // 用于存储不同的数字字符串

  let i = 0
  while (i < word.length) {
    // 跳过非数字字符
    if (word[i] < '0' || word[i] > '9') {
      i += 1
      continue
    }

    // 找到连续数字的结束位置 [i, j]
    let j = i
    while (j < word.length && word[j] >= '0' && word[j] <= '9') j += 1

    // 去掉前导零
    let start = i
    while (start < j && word[start] === '0') start += 1

    const numStr = start === j ? '0' : word.slice(start, j)
    set.add(numStr)
    i = j
  }

  return set.size // 返回不同数字的个数
}
