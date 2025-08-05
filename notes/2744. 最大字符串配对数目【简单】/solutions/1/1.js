/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let pairs = 0
  const used = new Set() // 记录已配对的字符串索引

  // 遍历每对字符串
  for (let i = 0; i < words.length; i++) {
    if (used.has(i)) continue // 跳过已配对的字符串

    for (let j = i + 1; j < words.length; j++) {
      if (used.has(j)) continue // 跳过已配对的字符串

      // 检查是否可以配对（一个是否为另一个的反转），提示中表明：words[i].length == 2 字符串长度为 2。
      if (words[i][0] === words[j][1] && words[i][1] === words[j][0]) {
        pairs++
        used.add(i)
        used.add(j)
        break // 找到配对后跳出内层循环
      }
    }
  }

  return pairs
}
