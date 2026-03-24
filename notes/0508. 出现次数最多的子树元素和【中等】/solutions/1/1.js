/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const freq = new Map()
  let maxFreq = 0
  const dfs = (node) => {
    if (!node) return 0
    const sum = node.val + dfs(node.left) + dfs(node.right)
    const cnt = (freq.get(sum) || 0) + 1
    freq.set(sum, cnt)
    maxFreq = Math.max(maxFreq, cnt)
    return sum
  }
  dfs(root)
  const res = []
  for (const [sum, cnt] of freq) if (cnt === maxFreq) res.push(sum)
  return res
}
