/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map()
  const res = []
  const dfs = (node) => {
    if (!node) return '#'
    const key = `${node.val},${dfs(node.left)},${dfs(node.right)}`
    const cnt = map.get(key) || 0
    if (cnt === 1) res.push(node)
    map.set(key, cnt + 1)
    return key
  }
  dfs(root)
  return res
}
