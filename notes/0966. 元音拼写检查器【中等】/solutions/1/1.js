/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const exactMatch = new Set() // 完全匹配
  const caseInsensitive = new Map() // 大小写不敏感匹配
  const vowelInsensitive = new Map() // 元音不敏感匹配

  // 将元音替换为统一字符（如 '*'）
  const replaceVowels = (word) => {
    return word.replace(/[aeiou]/gi, '*')
  }

  // 构建哈希表
  for (const word of wordlist) {
    exactMatch.add(word)

    const lower = word.toLowerCase()
    if (!caseInsensitive.has(lower)) {
      caseInsensitive.set(lower, word)
    }

    const pattern = replaceVowels(lower)
    if (!vowelInsensitive.has(pattern)) {
      vowelInsensitive.set(pattern, word)
    }
  }

  // 处理查询
  const result = []
  for (const query of queries) {
    // 优先级1：完全匹配
    if (exactMatch.has(query)) {
      result.push(query)
      continue
    }

    const lower = query.toLowerCase()
    // 优先级2：大小写不敏感匹配
    if (caseInsensitive.has(lower)) {
      result.push(caseInsensitive.get(lower))
      continue
    }

    const pattern = replaceVowels(lower)
    // 优先级3：元音不敏感匹配
    if (vowelInsensitive.has(pattern)) {
      result.push(vowelInsensitive.get(pattern))
      continue
    }

    // 无匹配
    result.push('')
  }

  return result
}
