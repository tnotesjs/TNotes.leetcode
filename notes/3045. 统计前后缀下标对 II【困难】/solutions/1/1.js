/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
  // 使用 (s[i], s[n-1-i]) 对构建字典树
  const root = {}
  let ans = 0
  for (const word of words) {
    const n = word.length
    let node = root
    for (let i = 0; i < n; i++) {
      const key = word[i] + ',' + word[n - 1 - i]
      if (!node[key]) node[key] = { cnt: 0 }
      node = node[key]
      if (i === n - 1) {
        ans += node.cnt
      }
    }
    // 同时检查此 word 自身是否匹配之前的 words
    // 上面已经在遍历过程中累加了
    // 遍历完后将自己的终点标记
    node.cnt = (node.cnt || 0) + 1
  }
  // 需要重新计算：对于每个 j，统计有多少 i < j 使得 words[i] 是 words[j] 的前后缀
  // 上面的方法是：遍历到 words[j] 时，在字典树中走 (word[i], word[n-1-i]) 路径
  // 每到一个节点累加该节点的终止计数
  root2 = {}
  ans = 0
  for (const word of words) {
    const n = word.length
    let node = root2
    for (let i = 0; i < n; i++) {
      const key = word[i] + ',' + word[n - 1 - i]
      if (!node[key]) node[key] = { cnt: 0 }
      node = node[key]
      ans += node.cnt
    }
    node.cnt++
  }
  return ans
}
