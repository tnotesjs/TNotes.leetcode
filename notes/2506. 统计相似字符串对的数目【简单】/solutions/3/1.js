/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  // 使用位掩码表示字符串包含的字符集合
  const getBitMask = (word) => {
    let mask = 0
    for (let char of word) {
      mask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0))
    }
    return mask
  }

  // 统计每种位掩码的出现次数
  const countMap = new Map()
  for (let word of words) {
    const mask = getBitMask(word)
    countMap.set(mask, (countMap.get(mask) || 0) + 1)
  }

  // 计算组合数：C(n,2) = n*(n-1)/2
  let result = 0
  for (let count of countMap.values()) {
    if (count > 1) {
      result += (count * (count - 1)) / 2
    }
  }

  return result
}
