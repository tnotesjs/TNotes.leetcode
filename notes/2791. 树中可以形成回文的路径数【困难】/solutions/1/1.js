/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var countPalindromePaths = function (parent, s) {
  const n = parent.length
  const children = Array.from({ length: n }, () => [])
  for (let i = 1; i < n; i++) children[parent[i]].push(i)

  const cnt = new Map()
  cnt.set(0, 1)
  let ans = 0
  // mask[u] = 从根到 u 路径上每个字符出现次数的奇偶性（位掩码）
  const mask = new Int32Array(n)
  const stack = [0]
  while (stack.length) {
    const u = stack.pop()
    ans += cnt.get(mask[u]) || 0
    for (let b = 0; b < 26; b++) ans += cnt.get(mask[u] ^ (1 << b)) || 0
    cnt.set(mask[u], (cnt.get(mask[u]) || 0) + 1)
    for (const v of children[u]) {
      mask[v] = mask[u] ^ (1 << (s.charCodeAt(v) - 97))
      stack.push(v)
    }
  }
  return ans
}
