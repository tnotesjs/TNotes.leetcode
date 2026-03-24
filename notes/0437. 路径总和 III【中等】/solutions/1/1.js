/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const map = new Map([[0, 1]])
  let count = 0
  const dfs = (node, prefix) => {
    if (!node) return
    prefix += node.val
    count += map.get(prefix - targetSum) || 0
    map.set(prefix, (map.get(prefix) || 0) + 1)
    dfs(node.left, prefix)
    dfs(node.right, prefix)
    map.set(prefix, map.get(prefix) - 1)
  }
  dfs(root, 0)
  return count
}
