/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map()

  // 存储每个字符的索引，重复字符标记为-1
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (map.has(char)) {
      map.set(char, -1) // 标记为重复
    } else {
      map.set(char, i) // 存储索引
    }
  }

  // 找到最小的非-1索引
  let minIndex = s.length
  for (const [char, index] of map) {
    if (index !== -1 && index < minIndex) {
      minIndex = index
    }
  }

  return minIndex === s.length ? -1 : minIndex
}
